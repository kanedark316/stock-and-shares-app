import { useState } from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select";

const StockAndSharesApp = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [riskLevel, setRiskLevel] = useState('low');
  const [aiRecommendation, setAiRecommendation] = useState('');
  const [selectedStock, setSelectedStock] = useState('');

  const stocks = [...]; // your stock data array

  const handleGetRecommendation = () => {
    // Simulate AI bot logic
    const riskLevels = {
      low: 0.5,
      medium: 1.0,
      high: 1.5,
    };
    const investmentAmountMultiplier = riskLevels[riskLevel];
    const recommendedStocks = stocks.filter((stock) => stock.symbol === selectedStock);
    const recommendation = `Based on your investment amount of $${investmentAmount} and risk level of ${riskLevel}, our AI bot recommends investing in ${recommendedStocks[0].name} with a multiplier of ${investmentAmountMultiplier}.`;
    setAiRecommendation(recommendation);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Stock and Shares App</CardTitle>
          <CardDescription>Get personalized investment recommendations from our AI bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="stockSymbol">Select Stock:</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Stock" />
              </SelectTrigger>
              <SelectContent>
                {stocks.map((stock, index) => (
                  <SelectItem key={index} value={stock.symbol} onClick={() => setSelectedStock(stock.name)}>
                    {stock.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-4">
            <Label htmlFor="investmentAmount">Investment Amount:</Label>
            <Input type="number" value={investmentAmount} onChange={(e) => setInvestmentAmount(e.target.value)} />
          </div>
          <div className="mb-4">
            <Label htmlFor="riskLevel">Risk Level:</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Risk Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low" onClick={() => setRiskLevel('low')}>
                  Low
                </SelectItem>
                <SelectItem value="medium" onClick={() => setRiskLevel('medium')}>
                  Medium
                </SelectItem>
                <SelectItem value="high" onClick={() => setRiskLevel('high')}>
                  High
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGetRecommendation}>Get Recommendation</Button>
          <div className="mt-4">
            <p>{aiRecommendation}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockAndSharesApp;
