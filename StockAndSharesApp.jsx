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

  // your stock data array
  const stocks = [ { name: 'Agree Realty (ADC)', symbol: 'ADC' }, 
{ name: 'AGNC Investment (AGNC)', symbol: 'AGNC' }, 
{ name: 'Atrium Mortgage Investment Corporation (AMIVF)', symbol: 'AMIVF' }, 
{ name: 'Apple Hospitality REIT, Inc. (APLE)', symbol: 'APLE' }, 
{ name: 'ARMOUR Residential REIT (ARR)', symbol: 'ARR' }, 
{ name: 'A&W Revenue Royalties Income Fund (AWRRF)', symbol: 'AWRRF' }, 
{ name: 'Banco Bradesco S.A. (BBD)', symbol: 'BBD' }, 
{ name: 'Diversified Royalty Corp. (BEVFF)', symbol: 'BEVFF' }, 
{ name: 'Boston Pizza Royalties Income Fund (BPZZF)', symbol: 'BPZZF' }, 
{ name: 'Bridgemarq Real Estate Services (BREUF)', symbol: 'BREUF' }, 
{ name: 'BSR Real Estate Investment Trust (BSRTF)', symbol: 'BSRTF' }, 
{ name: 'Canadian Apartment Properties REIT (CDPYF)', symbol: 'CDPYF' }, 
{ name: 'ChemTrade Logistics Income Fund (CGIFF)', symbol: 'CGIFF' }, 
{ name: 'Choice Properties REIT (PPRQF)', symbol: 'PPRQF' }, 
{ name: 'Cross Timbers Royalty Trust (CRT)', symbol: 'CRT' }, 
{ name: 'CT Real Estate Investment Trust (CTRRF)', symbol: 'CTRRF' }, 
{ name: 'SmartCentres Real Estate Investment Trust (CWYUF)', symbol: 'CWYUF' }, 
{ name: 'Dream Industrial REIT (DREUF)', symbol: 'DREUF' }, 
{ name: 'Dream Office REIT (DRETF)', symbol: 'DRETF' }, 
{ name: 'Dynex Capital (DX)', symbol: 'DX' }, 
{ name: 'Ellington Residential Mortgage REIT (EARN)', symbol: 'EARN' }, 
{ name: 'Ellington Financial (EFC)', symbol: 'EFC' }, 
{ name: 'EPR Properties (EPR)', symbol: 'EPR' }, 
{ name: 'Exchange Income Corporation (EIFZF)', symbol: 'EIFZF' }, 
{ name: 'Extendicare Inc. (EXETF)', symbol: 'EXETF' }, 
{ name: 'Flagship Communities REIT (MHCUF)', symbol: 'MHCUF' }, 
{ name: 'First National Financial Corporation (FNLIF)', symbol: 'FNLIF' }, 
{ name: 'Freehold Royalties Ltd. (FRHLF)', symbol: 'FRHLF' }, 
{ name: 'Firm Capital Property Trust (FRMUF)', symbol: 'FRMUF' }, 
{ name: 'Fortitude Gold (FTCO)', symbol: 'FTCO' }, 
{ name: 'Gladstone Capital Corporation (GLAD)', symbol: 'GLAD' }, 
{ name: 'Gladstone Commercial Corporation (GOOD)', symbol: 'GOOD' }, 
{ name: 'Gladstone Investment Corporation (GAIN)', symbol: 'GAIN' }, 
{ name: 'Gladstone Land Corporation (LAND)', symbol: 'LAND' }, 
{ name: 'Global Water Resources (GWRS)', symbol: 'GWRS' }, 
{ name: 'Granite Real Estate Investment Trust (GRP.U)', symbol: 'GRP.U' }, 
{ name: 'H&R Real Estate Investment Trust (HRUFF)', symbol: 'HRUFF' }, 
{ name: 'Horizon Technology Finance (HRZN)', symbol: 'HRZN' }, 
{ name: 'Hugoton Royalty Trust (HGTXU)', symbol: 'HGTXU' }, 
{ name: 'Itaú Unibanco (ITUB)', symbol: 'ITUB' }, 
{ name: 'The Keg Royalties Income Fund (KRIUF)', symbol: 'KRIUF' }, 
{ name: 'LTC Properties (LTC)', symbol: 'LTC' }, 
{ name: 'Sienna Senior Living (LWSCF)', symbol: 'LWSCF' }, 
{ name: 'Main Street Capital (MAIN)', symbol: 'MAIN' }, 
{ name: 'Modiv Inc. (MDV)', symbol: 'MDV' }, 
{ name: 'Mullen Group Ltd. (MLLGF)', symbol: 'MLLGF' }, 
{ name: 'Northland Power Inc. (NPIFF)', symbol: 'NPIFF' }, 
{ name: 'NorthWest Healthcare Properties REIT (NWHUF)', symbol: 'NWHUF' }, 
{ name: 'Orchid Island Capital (ORC)', symbol: 'ORC' }, 
{ name: 'Oxford Square Capital (OXSQ)', symbol: 'OXSQ' }, 
{ name: 'Permian Basin Royalty Trust (PBT)', symbol: 'PBT' }, 
{ name: 'Phillips Edison & Company (PECO)', symbol: 'PECO' }, 
{ name: 'Pennant Park Floating Rate (PFLT)', symbol: 'PFLT' }, 
{ name: 'Peyto Exploration & Development Corp. (PEYUF)', symbol: 'PEYUF' }, 
{ name: 'Pine Cliff Energy Ltd. (PIFYF)', symbol: 'PIFYF' }, 
{ name: 'Primaris REIT (PMREF)', symbol: 'PMREF' }, 
{ name: 'Paramount Resources Ltd. (PRMRF)', symbol: 'PRMRF' }, 
{ name: 'PermRock Royalty Trust (PRT)', symbol: 'PRT' }, 
{ name: 'Prospect Capital Corporation (PSEC)', symbol: 'PSEC' }, 
{ name: 'Permianville Royalty Trust (PVL)', symbol: 'PVL' }, 
{ name: 'Pizza Pizza Royalty Corp. (PZRIF)', symbol: 'PZRIF' }, 
{ name: 'Realty Income (O)', symbol: 'O' }, 
{ name: 'RioCan Real Estate Investment Trust (RIOCF)', symbol: 'RIOCF' }, 
{ name: 'Richards Packaging Income Fund (RPKIF)', symbol: 'RPKIF' }, 
{ name: 'Sabine Royalty Trust (SBR)', symbol: 'SBR' }, 
{ name: 'Stellus Capital Investment Corp. (SCM)', symbol: 'SCM' }, 
{ name: 'Savaria Corp. (SISXF)', symbol: 'SISXF' }, 
{ name: 'San Juan Basin Royalty Trust (SJT)', symbol: 'SJT' }, 
{ name: 'SL Green Realty Corp. (SLG)', symbol: 'SLG' }, 
{ name: 'Whitecap Resources Inc. (SPGYF)', symbol: 'SPGYF' }, 
{ name: 'Slate Grocery REIT (SRRTF)', symbol: 'SRRTF' }, 
{ name: 'Stag Industrial (STAG)', symbol: 'STAG' }, 
{ name: 'Timbercreek Financial Corp. (TBCRF)', symbol: 'TBCRF' }, 
{ name: 'Tamarack Valley Energy (TNEYF)', symbol: 'TNEYF' }, 
{ name: 'U.S. Global Investors (GROW)', symbol: 'GROW' }, 
{ name: 'Whitestone REIT (WSR)', symbol: 'WSR' }, ];

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
