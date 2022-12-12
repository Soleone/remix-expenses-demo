import type { Plan } from "~/model/types"
type PublicPlan = Omit<Plan, "id">

export default function PricingPlan({ title, price, perks, icon }: PublicPlan) {
  const Icon = icon
  return (
    <article>
      <header>
        <div className="icon">
          <Icon />
        </div>
        <h2>{title}</h2>
        <p>{price}</p>
      </header>
      <div className="plan-content">
        <ol>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ol>
        <div className='actions'>
          <a href="/not-implemented">Learn More</a>
        </div>
      </div>
    </article>
  )
}
