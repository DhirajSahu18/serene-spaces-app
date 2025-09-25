import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  "I often feel motivated to complete my daily tasks.",
  "I find joy in the activities I used to enjoy.",
  "I have trouble sleeping or oversleep frequently.",
  "I feel anxious or worried more than usual.",
  "I feel supported by people around me.",
  "I often feel overwhelmed or hopeless.",
  "I have difficulty concentrating on things.",
  "I feel optimistic about my future.",
  "I often feel tired even after resting.",
  "I feel confident in my ability to handle problems.",
  "I have been eating more or less than usual.",
  "I feel emotionally numb or disconnected.",
  "I enjoy spending time with friends and family.",
  "I feel like I'm a burden to others.",
  "I have thoughts of hurting myself.",
  "I feel physically tense or restless.",
  "I can manage my daily responsibilities well.",
  "I feel like my life has meaning and purpose.",
  "I often feel irritable or easily frustrated.",
  "I feel hopeful about the future."
];

// Questions 2, 4, 5, 7, 8, 10, 13, 17, 18, 20 are reverse scored (higher = better)
const REVERSE_SCORED = [1, 4, 8, 9, 12, 16, 17, 19];

const getRandomQuestions = () => {
  const shuffled = [...QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10).map((question, index) => ({
    id: index,
    text: question,
    originalIndex: QUESTIONS.indexOf(question)
  }));
};

interface QuestionnaireResultProps {
  score: number;
  onRestart: () => void;
}

const QuestionnaireResult = ({ score, onRestart }: QuestionnaireResultProps) => {
  const navigate = useNavigate();
  
  const getResultMessage = (score: number) => {
    if (score <= 20) {
      return {
        level: "Excellent Mental Wellness",
        message: "Your responses suggest you're experiencing excellent mental wellness. Keep up the great practices that support your well-being!",
        color: "text-wellness-growth",
        bgColor: "wellness-supportive"
      };
    } else if (score <= 30) {
      return {
        level: "Good Mental Health",
        message: "Your responses suggest you're maintaining good mental health. Consider continuing your current wellness practices and perhaps exploring new ones.",
        color: "text-wellness-calm",
        bgColor: "wellness-peaceful"
      };
    } else if (score <= 40) {
      return {
        level: "Mild Stress Indicators",
        message: "Your responses suggest you may be experiencing some stress. Consider relaxation techniques, journaling, or talking with someone you trust.",
        color: "text-wellness-hope",
        bgColor: "bg-wellness-hope/20"
      };
    } else {
      return {
        level: "Consider Professional Support",
        message: "Your responses suggest you might benefit from professional support. Please consider reaching out to a mental health professional or crisis helpline.",
        color: "text-destructive",
        bgColor: "bg-destructive/10"
      };
    }
  };

  const result = getResultMessage(score);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className={`wellness-card ${result.bgColor}`}>
        <CardHeader className="text-center">
          <CardTitle className={`text-2xl ${result.color}`}>
            {result.level}
          </CardTitle>
          <CardDescription className="text-lg">
            Score: {score}/50
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            {result.message}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={onRestart} variant="outline">
              Take Again
            </Button>
            <Button onClick={() => navigate("/journal")} className="bg-primary">
              Start Journaling
            </Button>
            <Button onClick={() => navigate("/support")} variant="secondary">
              View Support Resources
            </Button>
          </div>
          
          {score > 40 && (
            <div className="mt-6 p-4 bg-destructive/5 border border-destructive/20 rounded-xl">
              <p className="text-sm text-destructive font-medium text-center">
                If you're having thoughts of self-harm, please contact a crisis helpline immediately or go to your nearest emergency room.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const MentalHealthQuestionnaire = () => {
  const [questions] = useState(getRandomQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      const answer = answers[index] || 1;
      const isReverse = REVERSE_SCORED.includes(question.originalIndex);
      score += isReverse ? (6 - answer) : answer;
    });
    
    setTotalScore(score);
    setShowResult(true);
  };

  const restartQuestionnaire = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setTotalScore(0);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    return <QuestionnaireResult 
      score={totalScore} 
      onRestart={restartQuestionnaire} 
    />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="wellness-card">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-wellness-calm">Mental Health Check-In</CardTitle>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium leading-relaxed">
              {questions[currentQuestion].text}
            </h3>
            
            <RadioGroup
              value={answers[currentQuestion]?.toString() || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {[
                { value: "1", label: "Strongly Disagree" },
                { value: "2", label: "Disagree" },
                { value: "3", label: "Neutral" },
                { value: "4", label: "Agree" },
                { value: "5", label: "Strongly Agree" }
              ].map(({ value, label }) => (
                <div key={value} className="flex items-center space-x-3">
                  <RadioGroupItem value={value} id={`option-${value}`} />
                  <Label 
                    htmlFor={`option-${value}`} 
                    className="text-sm font-medium cursor-pointer flex-1 py-2"
                  >
                    {label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div className="flex justify-between pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
              className="bg-primary"
            >
              {currentQuestion === questions.length - 1 ? "Complete" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentalHealthQuestionnaire;