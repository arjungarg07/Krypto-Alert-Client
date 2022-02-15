import AlertList from './AlertList';

const AlertCards = ({alertsData}) => {
  return (
    <div className="flex">
      <AlertList alertsData={alertsData} />
    </div>
  );
};

export default AlertCards;