import { useState } from 'react'
import React from 'react'
import Header from './Header';
import Progress from './Progress'
import About from './About'
import PledgeOptions from './PledgeOptions'
import PledgeModal from './PledgeModal'
import Data from './PledgeData'
import SuccessModal from './SuccessModal'


function Home() {

  const [bookMark, setBookMark] = useState(false)
  const[showPledgeModal, setShowPledgeModal] = useState(false)
  const [backed, setBacked] = useState(39814)
  const [backers, setBackers] = useState(5007)
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [pledge, setPledge] = useState()
  const [pledgeData, setPledgeData] = useState(Data);
  const[showSuccessModal, setShowSuccessModal] = useState(false)
  
 
  const toggleBookMark = () =>{
    setBookMark(!bookMark)
  }

  const togglePledgeModal = () =>{
    setShowPledgeModal(!showPledgeModal)
  }

  const toggleSuccessModal = () =>{
    setShowSuccessModal(!showSuccessModal)
  }

  const handlePledge = (value) => {
    setPledge(value)
  }

  const handleRadioChange = (value) => {
    setSelectedRadio(value === selectedRadio? null: value)
  }
  
  const totalBacked = () =>{
    setBacked(Number(backed) + Number(pledge))
    setBackers(Number(backers)  + 1) 
    setPledge('')    
  }

  const handleSelectReward = (id) => {
    togglePledgeModal();
    handleRadioChange(id);
  };

  
  const progressPercentile = ((backed)/ 100000)*100;
  

  const decreasePledges = (selectedPledgeId) => {   
    const selectedPledge = pledgeData.find((pledge) => pledge.id === selectedPledgeId);

    if (selectedPledge && selectedPledge.pledges > 0) {
      const updatedPledgeData = pledgeData.map((pledge) =>
        pledge.id === selectedPledgeId ? { ...pledge, pledges: pledge.pledges - 1 } : pledge
      );
      setPledgeData(updatedPledgeData);
    }

  };
  

  return (
    <>
    <div className={`${(showPledgeModal || showSuccessModal) && 'brightness-50'} `}>
      <Header toggleBookMark={toggleBookMark} bookMark={bookMark}
      backProject={togglePledgeModal}/>
      <div className='bg-slate-200 pt-60 md:pt-48 md:px-64 px-5 '>
        <Progress backed={backed} backers={backers} 
        progressPercentile={progressPercentile}/>
        <div className=' flex md:justify-center justify-start'>
          <div className='rounded-xl w-full bg-white md:px-20 px-5 py-10 mb-10'>
            <About />
            <PledgeOptions data={pledgeData} handleSelectReward={handleSelectReward} 
            handleRadio={handleRadioChange}/>  
          </div>
        </div>
      </div>
    </div>
    <PledgeModal isOpen={showPledgeModal} togglePledgeModal={togglePledgeModal}
      newValue={selectedRadio} handleRadio={handleRadioChange}
      handlePledge={handlePledge} inpVal={pledge} 
      data={pledgeData} toggleSuccessModal={toggleSuccessModal} />
    <SuccessModal toggleSuccessModal={toggleSuccessModal} isSuccessOpen={showSuccessModal}
     totalBacked={totalBacked} newValue={selectedRadio}
    decreasePledges={decreasePledges} setRadio={setSelectedRadio} />
    </>
  )
}

export default Home
