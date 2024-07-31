import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Progress } from "./ui/progress";
import { summaries } from '../data/summaries';

const GoalTable = () => {
  const [selectedSummary, setSelectedSummary] = useState(null);
  const completedSummaries = Object.values(summaries).filter(summary => summary.length > 0).length;
  const progress = (completedSummaries / 19) * 100;

  const goals = [
    { day: 1, pages: "1-50", focus: "The Pre-Socratics" },
    { day: 2, pages: "51-100", focus: "Socrates, Plato, Aristotle" },
    { day: 3, pages: "101-150", focus: "Ancient Philosophy after Aristotle" },
    { day: 4, pages: "151-200", focus: "The Fathers of the Church" },
    { day: 5, pages: "201-250", focus: "The Schoolmen" },
    { day: 6, pages: "251-300", focus: "The Renaissance" },
    { day: 7, pages: "301-350", focus: "The Rise of Modern Science" },
    { day: 8, pages: "351-400", focus: "Rationalism" },
    { day: 9, pages: "401-450", focus: "Empiricism" },
    { day: 10, pages: "451-500", focus: "Rousseau and Kant" },
    { day: 11, pages: "501-550", focus: "German Idealism" },
    { day: 12, pages: "551-600", focus: "Romanticism and Utilitarianism" },
    { day: 13, pages: "601-650", focus: "Marx and Socialist Movements" },
    { day: 14, pages: "651-700", focus: "Bergson and William James" },
    { day: 15, pages: "701-750", focus: "Pragmatism and Instrumentalism" },
    { day: 16, pages: "751-800", focus: "The Philosophy of Logical Analysis" },
    { day: 17, pages: "801-850", focus: "20th Century Philosophy I" },
    { day: 18, pages: "851-900", focus: "20th Century Philosophy II" },
    { day: 19, pages: "901-955", focus: "Conclusion and Review" }
  ];

  return (
    <div className="goal-table">
      <h2 className="text-2xl font-bold mb-4">Intensive Reading Plan</h2>
      <div className="mb-4">
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-gray-600 mt-1">{completedSummaries} of 19 summaries completed</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Pages</TableHead>
            <TableHead>Focus</TableHead>
            <TableHead>Summary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {goals.map((goal) => (
            <TableRow key={goal.day}>
              <TableCell>{goal.day}</TableCell>
              <TableCell>{goal.pages}</TableCell>
              <TableCell>{goal.focus}</TableCell>
              <TableCell>
                {summaries[goal.day] ? (
                  <Button onClick={() => setSelectedSummary({day: goal.day, content: summaries[goal.day]})}>
                    View Summary
                  </Button>
                ) : (
                  <span className="text-gray-400">Not yet available</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={!!selectedSummary} onOpenChange={() => setSelectedSummary(null)}>
        <DialogContent className="bg-white p-6 rounded-lg max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-2">Summary for Day {selectedSummary?.day}</DialogTitle>
            <DialogDescription className="text-sm text-gray-600 whitespace-pre-wrap">
              {selectedSummary?.content}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GoalTable;