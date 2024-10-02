import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const DIFFICULTY_XP = {
  easy: 0.05,
  medium: 0.1,
  hard: 0.15
};

const calculateXpForNextLevel = (currentLevel) => {
  return Math.round(1000 * Math.pow(1.1, currentLevel - 1));
};

const calculateQuestXp = (level, difficulty) => {
  return Math.round(500 + (level * 100 * DIFFICULTY_XP[difficulty]));
};

const TodoApp = () => {
  const [quests, setQuests] = useState([]);
  const [newQuest, setNewQuest] = useState({ title: '', description: '', difficulty: 'easy' });
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);

  const addQuest = () => {
    if (newQuest.title) {
      setQuests([...quests, { ...newQuest, completed: false, xp: calculateQuestXp(level, newQuest.difficulty) }]);
      setNewQuest({ title: '', description: '', difficulty: 'easy' });
    }
  };

  const completeQuest = (index) => {
    const updatedQuests = [...quests];
    updatedQuests[index].completed = true;
    setQuests(updatedQuests);
    addXp(updatedQuests[index].xp);
  };

  const addXp = (amount) => {
    const newXp = xp + amount;
    const xpForNextLevel = calculateXpForNextLevel(level);
    if (newXp >= xpForNextLevel) {
      setLevel(level + 1);
      setXp(newXp - xpForNextLevel);
      updateQuestXp(level + 1);
    } else {
      setXp(newXp);
    }
  };

  const updateQuestXp = (newLevel) => {
    const updatedQuests = quests.map(quest => ({
      ...quest,
      xp: calculateQuestXp(newLevel, quest.difficulty)
    }));
    setQuests(updatedQuests);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="mb-4">
        <p>Level: {level}</p>
        <p>XP: {xp} / {calculateXpForNextLevel(level)}</p>
      </div>
      <Card className="mb-4">
        <CardHeader>Add New Quest</CardHeader>
        <CardContent>
          <Input
            className="mb-2"
            placeholder="Quest title"
            value={newQuest.title}
            onChange={(e) => setNewQuest({ ...newQuest, title: e.target.value })}
          />
          <Input
            className="mb-2"
            placeholder="Quest description"
            value={newQuest.description}
            onChange={(e) => setNewQuest({ ...newQuest, description: e.target.value })}
          />
          <div className="flex mb-2">
            <Button
              className={`mr-2 ${newQuest.difficulty === 'easy' ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setNewQuest({ ...newQuest, difficulty: 'easy' })}
            >
              Easy
            </Button>
            <Button
              className={`mr-2 ${newQuest.difficulty === 'medium' ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setNewQuest({ ...newQuest, difficulty: 'medium' })}
            >
              Medium
            </Button>
            <Button
              className={`mr-2 ${newQuest.difficulty === 'hard' ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setNewQuest({ ...newQuest, difficulty: 'hard' })}
            >
              Hard
            </Button>
          </div>
          <Button onClick={addQuest}>Add Quest</Button>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>Active Quests</CardHeader>
          <CardContent>
            {['easy', 'medium', 'hard'].map(difficulty => (
              <div key={difficulty} className="mb-4">
                <h3 className="font-bold capitalize">{difficulty}</h3>
                {quests.filter(quest => !quest.completed && quest.difficulty === difficulty).map((quest, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Checkbox
                      className="mr-2"
                      checked={quest.completed}
                      onCheckedChange={() => completeQuest(quests.indexOf(quest))}
                    />
                    <span>{quest.title} - XP: {quest.xp}</span>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Completed Quests</CardHeader>
          <CardContent>
            {['easy', 'medium', 'hard'].map(difficulty => (
              <div key={difficulty} className="mb-4">
                <h3 className="font-bold capitalize">{difficulty}</h3>
                {quests.filter(quest => quest.completed && quest.difficulty === difficulty).map((quest, index) => (
                  <div key={index} className="mb-2">
                    <span>{quest.title} - XP: {quest.xp}</span>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TodoApp;
