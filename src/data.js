
const d = [
  {
    date: '16/07/2022',
    status: 'In Review',
    submittedBy: 'Dilip Agheda',
    text: `We need to future-proof this win-win-win. `
  },
  {
    date: '17/07/2022',
    status: 'In Review',
    submittedBy: 'Dilip Agheda',
    text: `Great plan! Let me diarize this, and we can synchronize ourselves at a later timeframe, for strategic staircase wiggle room. Idea shower: what's our go to market strategy? Table the discussion; I just wanted to give you a heads-up, and run it up the flag pole for a performance review. `
  },
  {
    date: '18/07/2022',
    status: 'Approved',
    submittedBy: 'Dilip Agheda',
    text: `The night is dark and full of terrors. The winds of Winter. What is dead may never die. And now his watch is ended. The battle of the redgrass field. Unbowed, Unbent, Unbroken. All men must die.`
  },
  {
    date: '19/07/2022',
    status: 'Published',
    submittedBy: 'Dilip Agheda',
    text: `I started painting as a hobby when I was little. I didn't know I had any talent. I believe talent is just a pursued interest. Anybody can do what I do. Just go back and put one little more happy tree in there. Everybody's different. Trees are different. Let them all be individuals. We'll put some happy little leaves here and there. These things happen automatically. All you have to do is just let them happen. Everyone wants to enjoy the good parts - but you have to build the framework first. Let's do that again. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. If you do too much it's going to lose its effectiveness. If you don't think every day is a good day - try missing a few. You'll see. In life you need colors. Fluff it up a little and hypnotize it.  We can fix anything. Automatically, all of these beautiful, beautiful things will happen. There we go. Look at them little rascals.`
  }
]

const getData = () => {
  const x = []
  for(let i=1;i<=100;i++) {
    x.push(...d)
  }
  return x
}

export const data = getData();
