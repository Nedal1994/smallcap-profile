/*import React, { useState } from 'react';
// Ensure this file exists
import './Dapp.css';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    tokenName: '',
    tokenSymbol: '',
    tokenContractAddress: '',
    blockchainExplorerUrl: '',
    websiteUrl: '',
    technology: '',
    blockchain: '',
    problemSolution: '',
    roadmapMilestones: '',
    whitepaperUrl: '',
    litepaperUrl: '',
    githubUrl: '',
    exchanges: '',
    supply: '',
    tokenDistributionFounders: '',
    tokenDistributionDevelopers: '',
    tokenDistributionMarketing: '',
    tokenDistributionCommunity: '',
    tokenDistributionInvestors: '',
    vestingSchedules: '',
    useCases: '',
    incentives: '',
    mechanisms: '',
    economicSustainability: '',
    auditReportUrl: '',
    auditSummary: '',
    liquidityLockup: '',
    marketCapitalization: '',
    ceoExpertise: '',
    cfoExpertise: '',
    ctoExpertise: '',
    cmoExpertise: '',
    developerExpertise: '',
    teamRoles: '',
    academicBackground: '',
    twitterEngagement: '',
    telegramEngagement: '',
    discordEngagement: '',
    linkedinEngagement: '',
    facebookEngagement: '',
    twitchEngagement: '',
    tiktokEngagement: '',
    socialMediaLinks: '',
    linkTreeLink: '',
    userReviews: '',
    youtubeUrl: '',
    marketingEfforts: '',
    brandIdentity: '',
    targetAudienceReach: '',
    listOfCompetitors: '',
    advantagesDisadvantages: '',
    usp: '',
    focus: '',
    revenueStreams: '',
    modelSustainability: '',
    fundingSources: '',
    keyPartners: '',
    pitchDeck: '',
    additionalInformation: '',
    emailAddress: ''
  });
  const [analysis, setAnalysis] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      setAnalysis(result.analysis);
      if (formData.email) {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email, analysis: result.analysis }),
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {step === 1 && (
        <div className="form-section">
          <h2>Project Information</h2>
          <input type="text" name="projectName" placeholder="Project Name" value={formData.projectName} onChange={handleChange} required />
          <textarea name="projectDescription" placeholder="Project Description" value={formData.projectDescription} onChange={handleChange} required></textarea>
          <input type="text" name="tokenName" placeholder="Token Name" value={formData.tokenName} onChange={handleChange} required />
          <input type="text" name="tokenSymbol" placeholder="Token Symbol" value={formData.tokenSymbol} onChange={handleChange} required />
          <input type="text" name="tokenContractAddress" placeholder="Token Contract Address" value={formData.tokenContractAddress} onChange={handleChange} required />
          <input type="url" name="blockchainExplorerUrl" placeholder="Blockchain Explorer URL" value={formData.blockchainExplorerUrl} onChange={handleChange} required />
          <input type="url" name="websiteUrl" placeholder="Website URL" value={formData.websiteUrl} onChange={handleChange} required />
          <div className="form-navigation">
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="form-section">
          <h2>Technology</h2>
          <input type="text" name="technology" placeholder="Technology" value={formData.technology} onChange={handleChange} required />
          <input type="text" name="blockchain" placeholder="Blockchain" value={formData.blockchain} onChange={handleChange} required />
          <textarea name="problemSolution" placeholder="Problem Statement & Proposed Solution" value={formData.problemSolution} onChange={handleChange} required></textarea>
          <textarea name="roadmapMilestones" placeholder="Roadmap & Key Milestones" value={formData.roadmapMilestones} onChange={handleChange} required></textarea>
          <input type="url" name="whitepaperUrl" placeholder="Whitepaper URL" value={formData.whitepaperUrl} onChange={handleChange} required />
          <input type="url" name="litepaperUrl" placeholder="Litepaper URL" value={formData.litepaperUrl} onChange={handleChange} required />
          <input type="url" name="githubUrl" placeholder="GitHub URL" value={formData.githubUrl} onChange={handleChange} required />
          <div className="form-navigation">
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="form-section">
          <h2>Token Information</h2>
          <textarea name="exchanges" placeholder="List of Exchanges with details (DEX & CEX)" value={formData.exchanges} onChange={handleChange} required></textarea>
          <input type="text" name="supply" placeholder="Total Supply" value={formData.supply} onChange={handleChange} required />
          <input type="text" name="tokenDistributionFounders" placeholder="Token Distribution: Founders" value={formData.tokenDistributionFounders} onChange={handleChange} required />
          <input type="text" name="tokenDistributionDevelopers" placeholder="Token Distribution: Developers" value={formData.tokenDistributionDevelopers} onChange={handleChange} required />
          <input type="text" name="tokenDistributionMarketing" placeholder="Token Distribution: Marketing" value={formData.tokenDistributionMarketing} onChange={handleChange} required />
          <input type="text" name="tokenDistributionCommunity" placeholder="Token Distribution: Community" value={formData.tokenDistributionCommunity} onChange={handleChange} required />
          <input type="text" name="tokenDistributionInvestors" placeholder="Token Distribution: Investors" value={formData.tokenDistributionInvestors} onChange={handleChange} required />
          <textarea name="vestingSchedules" placeholder="Vesting Schedules" value={formData.vestingSchedules} onChange={handleChange} required></textarea>
          <div className="form-navigation">
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="form-section">
          <h2>Use Cases and Economics</h2>
          <textarea name="useCases" placeholder="Use Cases" value={formData.useCases} onChange={handleChange} required></textarea>
          <textarea name="incentives" placeholder="Incentives" value={formData.incentives} onChange={handleChange} required></textarea>
          <textarea name="mechanisms" placeholder="Mechanisms" value={formData.mechanisms} onChange={handleChange} required></textarea>
          <textarea name="economicSustainability" placeholder="Economic Sustainability" value={formData.economicSustainability} onChange={handleChange} required></textarea>
          <input type="url" name="auditReportUrl" placeholder="Audit Report URL" value={formData.auditReportUrl} onChange={handleChange} required />
          <textarea name="auditSummary" placeholder="Audit Summary" value={formData.auditSummary} onChange={handleChange} required></textarea>
          <input type="text" name="liquidityLockup" placeholder="Total Liquidity and Lockup Duration" value={formData.liquidityLockup} onChange={handleChange} required />
          <input type="text" name="marketCapitalization" placeholder="Current Market Capitalization" value={formData.marketCapitalization} onChange={handleChange} required />
          <div className="form-navigation">
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="form-section">
          <h2>Team Information</h2>
          <textarea name="ceoExpertise" placeholder="Team Expertise: CEO/Founder" value={formData.ceoExpertise} onChange={handleChange} required></textarea>
          <textarea name="cfoExpertise" placeholder="Team Expertise: CFO" value={formData.cfoExpertise} onChange={handleChange} required></textarea>
          <textarea name="ctoExpertise" placeholder="Team Expertise: CTO" value={formData.ctoExpertise} onChange={handleChange} required></textarea>
          <textarea name="cmoExpertise" placeholder="Team Expertise: CMO" value={formData.cmoExpertise} onChange={handleChange} required></textarea>
          <textarea name="developerExpertise" placeholder="Team Expertise: Lead Developer" value={formData.developerExpertise} onChange={handleChange} required></textarea>
          <textarea name="teamRoles" placeholder="Team Roles and Responsibilities" value={formData.teamRoles} onChange={handleChange} required></textarea>
          <textarea name="academicBackground" placeholder="Academic Background" value={formData.academicBackground} onChange={handleChange} required></textarea>
          <div className="form-navigation">
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {step === 6 && (
        <div className="form-section">
          <h2>Marketing Information</h2>
          <textarea name="twitterEngagement" placeholder="Social Media Engagement: Twitter" value={formData.twitterEngagement} onChange={handleChange} required></textarea>
          <textarea name="telegramEngagement" placeholder="Social Media Engagement: Telegram" value={formData.telegramEngagement} onChange={handleChange} required></textarea>
          <textarea name="discordEngagement" placeholder="Social Media Engagement: Discord" value={formData.discordEngagement} onChange={handleChange} required></textarea>
          <textarea name="linkedinEngagement" placeholder="Social Media Engagement: LinkedIn" value={formData.linkedinEngagement} onChange={handleChange} required></textarea>
          <textarea name="facebookEngagement" placeholder="Social Media Engagement: Facebook" value={formData.facebookEngagement} onChange={handleChange} required></textarea>
          <textarea name="twitchEngagement" placeholder="Social Media Engagement: Twitch" value={formData.twitchEngagement} onChange={handleChange} required></textarea>
          <textarea name="tiktokEngagement" placeholder="Social Media Engagement: TikTok" value={formData.tiktokEngagement} onChange={handleChange} required></textarea>
          <textarea name="socialMediaLinks" placeholder="Social Media Links" value={formData.socialMediaLinks} onChange={handleChange} required></textarea>
          <input type="url" name="linkTreeLink" placeholder="LinkTree URL" value={formData.linkTreeLink} onChange={handleChange} required />
          <textarea name="userReviews" placeholder="User Reviews & Feedback" value={formData.userReviews} onChange={handleChange} required></textarea>
          <input type="url" name="youtubeUrl" placeholder="YouTube Channel URL" value={formData.youtubeUrl} onChange={handleChange} required />
          <div className="form-navigation">
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
      {step === 7 && (
        <div className="form-section">
          <h2>Additional Information</h2>
          <textarea name="marketingEfforts" placeholder="Marketing Efforts & Strategies" value={formData.marketingEfforts} onChange={handleChange} required></textarea>
          <textarea name="brandIdentity" placeholder="Brand Identity & Positioning" value={formData.brandIdentity} onChange={handleChange} required></textarea>
          <textarea name="targetAudienceReach" placeholder="Target Audience & Reach" value={formData.targetAudienceReach} onChange={handleChange} required></textarea>
          <textarea name="listOfCompetitors" placeholder="List of Competitors" value={formData.listOfCompetitors} onChange={handleChange} required></textarea>
          <textarea name="advantagesDisadvantages" placeholder="Advantages & Disadvantages" value={formData.advantagesDisadvantages} onChange={handleChange} required></textarea>
          <textarea name="usp" placeholder="Unique Selling Proposition (USP)" value={formData.usp} onChange={handleChange} required></textarea>
          <textarea name="focus" placeholder="Focus Areas" value={formData.focus} onChange={handleChange} required></textarea>
          <textarea name="revenueStreams" placeholder="Revenue Streams" value={formData.revenueStreams} onChange={handleChange} required></textarea>
          <textarea name="modelSustainability" placeholder="Business Model Sustainability" value={formData.modelSustainability} onChange={handleChange} required></textarea>
          <textarea name="fundingSources" placeholder="Funding Sources" value={formData.fundingSources} onChange={handleChange} required></textarea>
          <textarea name="keyPartners" placeholder="Key Partners & Collaborations" value={formData.keyPartners} onChange={handleChange} required></textarea>
          <input type="url" name="pitchDeck" placeholder="Pitch Deck URL" value={formData.pitchDeck} onChange={handleChange} required />
          <textarea name="additionalInformation" placeholder="Additional Information" value={formData.additionalInformation} onChange={handleChange} required></textarea>
          <input type="email" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange} required />
          <div className="form-navigation">
            <button type="button" onClick={prevStep}>Previous</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
*/


// frontend/src/pages/Dapp.js
import React, { useEffect, useState } from 'react';
import Form from '../components/Form'; // Assume this handles the multistep form
import AnalysisResult from '../components/AnalysisResult';
import { submitFormData } from '../services/api';
import { useNavigate } from "react-router-dom";

//import AnalysisResult from '../components/AnalysisResult';
const Dapp = () => {
  const [analysis, setAnalysis] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    tokenName: '',
    tokenSymbol: '',
    tokenContractAddress: '',
    blockchainExplorerUrl: '',
    websiteUrl: '',
    technology: '',
    blockchain: '',
    problemSolution: '',
    roadmapMilestones: '',
    whitepaperUrl: '',
    litepaperUrl: '',
    githubUrl: '',
    exchanges: '',
    supply: '',
    tokenDistributionFounders: '',
    tokenDistributionDevelopers: '',
    tokenDistributionMarketing: '',
    tokenDistributionCommunity: '',
    tokenDistributionInvestors: '',
    vestingSchedules: '',
    useCases: '',
    incentives: '',
    mechanisms: '',
    economicSustainability: '',
    auditReportUrl: '',
    auditSummary: '',
    liquidityLockup: '',
    marketCapitalization: '',
    ceoExpertise: '',
    cfoExpertise: '',
    ctoExpertise: '',
    cmoExpertise: '',
    developerExpertise: '',
    teamRoles: '',
    academicBackground: '',
    twitterEngagement: '',
    telegramEngagement: '',
    discordEngagement: '',
    linkedinEngagement: '',
    facebookEngagement: '',
    twitchEngagement: '',
    tiktokEngagement: '',
    socialMediaLinks: '',
    linkTreeLink: '',
    userReviews: '',
    youtubeUrl: '',
    marketingEfforts: '',
    brandIdentity: '',
    targetAudienceReach: '',
    listOfCompetitors: '',
    advantagesDisadvantages: '',
    usp: '',
    focus: '',
    revenueStreams: '',
    modelSustainability: '',
    fundingSources: '',
    keyPartners: '',
    pitchDeck: '',
    additionalInformation: '',
    emailAddress: ''
  });

  const handleFormSubmit = async () => {
    try {
      const result = await submitFormData(formData);
      console.log(result.analysis)
    //  navigate(`/analysis`,{state:{analysis:result.analysis}})
      navigate('/analysis', { state: { analysis: result.analysis } });

     // setAnalysis(result.analysis);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

 // useEffect(()=>{if(!localStorage.getItem('outhToken')){navigate('/login')}},[])
  return (
    <div>
      <Form formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} />
      {analysis && <AnalysisResult analysis={analysis} />}
    </div>
  );
};

export default Dapp;
