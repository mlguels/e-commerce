'use client'

import React, { useEffect, useState } from 'react'
import { setInterval } from 'timers'

import classes from './index.module.scss'

const Promotion = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  return (
    <section className={classes.promotion}>
      <div className={classes.textbox}>
        <h3 className={classes.title}>Deals of the Month</h3>
        <p>
          Get ready for a shopping experience like never before. We have the best deals of the month
          for you. Every purchase comes with exclusive perks and offers, making this month a
          celebration of savvy choices and amazing deals. Don't miss out! 🎁 🛒
        </p>
      </div>

      <ul className={classes.stats}>
        <StatBox label="Days" value={time.days} />
        <StatBox label="Hours" value={time.hours} />
        <StatBox label="Minutes" value={time.minutes} />
        <StatBox label="Seconds" value={time.seconds} />
      </ul>
    </section>
  )
}

const StatBox = ({ label, value }: { label: string; value: number }) => (
  <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
  </li>
)

export default Promotion
