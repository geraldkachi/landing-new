import "./bank.css"

interface FloatCardProps {
    emoji: string;
    name: string;
    bank: string;
}

const FloatCard = ({emoji, name, bank}: FloatCardProps) => {
  return (
    <div className="float-card overflow-hidden">
        <img src={emoji} alt="emojh" />
        <span>{name}</span>
        <span>{bank}</span>
    </div>
  )
}

export default FloatCard
