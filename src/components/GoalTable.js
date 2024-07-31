import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "./ui/dialog";
import { Progress } from "./ui/progress";
import { X } from 'lucide-react';
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
    <div className="goal-table p-4 max-w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Intensive Reading Plan</h2>
      <div className="mb-4">
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-gray-600 mt-1">{completedSummaries} of 19 summaries completed</p>
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-16 sm:w-20">Day</TableHead>
              <TableHead className="w-24 sm:w-32">Pages</TableHead>
              <TableHead className="hidden sm:table-cell">Focus</TableHead>
              <TableHead className="w-28 sm:w-32">Summary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {goals.map((goal) => (
              <TableRow key={goal.day}>
                <TableCell>{goal.day}</TableCell>
                <TableCell>{goal.pages}</TableCell>
                <TableCell className="hidden sm:table-cell">{goal.focus}</TableCell>
                <TableCell>
                  {summaries[goal.day] ? (
                    <Button 
                      onClick={() => setSelectedSummary({day: goal.day, content: summaries[goal.day]})}
                      className="w-full sm:w-auto"
                    >
                      View
                    </Button>
                  ) : (
                    <span className="text-gray-400 text-sm">Not available</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Dialog open={!!selectedSummary} onOpenChange={() => setSelectedSummary(null)}>
        <DialogContent className="bg-white p-4 sm:p-6 rounded-lg w-[90vw] sm:max-w-md mx-auto max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader className="flex justify-between items-start mb-4">
            <DialogTitle className="text-lg sm:text-xl font-bold">Summary for Day {selectedSummary?.day}</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </DialogClose>
          </DialogHeader>
          <DialogDescription className="text-sm text-gray-600 overflow-y-auto flex-grow pr-2">
            <div className="whitespace-pre-wrap">
              {selectedSummary?.content}
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GoalTable;