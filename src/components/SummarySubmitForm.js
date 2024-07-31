import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

const SummarySubmitForm = ({ onSubmit }) => {
  const [day, setDay] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(day, summary);
    setDay('');
    setSummary('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select value={day} onValueChange={setDay}>
        <SelectTrigger>
          <SelectValue placeholder="Select Day" />
        </SelectTrigger>
        <SelectContent>
          {[...Array(19)].map((_, i) => (
            <SelectItem key={i + 1} value={`${i + 1}`}>
              Day {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Textarea 
        value={summary} 
        onChange={(e) => setSummary(e.target.value)} 
        placeholder="Enter your summary"
        required
      />
      <Button type="submit">Submit Summary</Button>
    </form>
  );
};

export default SummarySubmitForm;