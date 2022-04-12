let data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const buttons =  document.querySelectorAll('.periodical-option')
// const periodical = Array.apply(null, nodelist);


const activateClickedLink = (button) => {
    buttons.forEach(b => b.classList.remove('active')) 
    button.classList.add('active')
}

const clearItemboxes = () => {
  const itemboxes = document.querySelectorAll('.item')
  itemboxes.forEach( i => i.remove())
}

const renderCards = (clickedOption) => {
    clearItemboxes();
const gridbox = document.querySelector('div.grid-container')

    const calcTimeframe = (option) => {
        if (option === 'daily'){
            return 'Yesterday'
        } else if ( option === 'weekly'){
            return 'Last Week'
        } else if  ( option === 'monthly'){
            return 'Last Month'
        }
    }
    
    data.forEach(activity => {
        const name = activity.title
        const activityClass = name.toLowerCase().replace(' ', '-')
        const timeframeData = activity.timeframes[clickedOption]
        const previousTimeframe = calcTimeframe(clickedOption)
       const section = document.createElement('section')
       section.classList.add('item', activityClass)
       const stringToInject = `
       <div class="item">
      <div class="layover1">
        <img class="icons" src="images/icon-${activityClass}.svg" alt="icon-work">
      </div>
      <div class="card">
        <div class="card-title">
         ${name}
        </div>
        <img class="ellipsis" src="images/icon-ellipsis.svg" alt="icon-ellipsis"> 
        <br> 
        <div class="hours dailyhours">${timeframeData.current}hrs</div>  
        <div class="previous yesterday">${[previousTimeframe]} - ${timeframeData.previous}</div>  
      </div>
    </div>
       `
    section.innerHTML = stringToInject
    gridbox.append(section)
    });
};
 
buttons.forEach(button => {
    button.addEventListener( 'click', () => {
        activateClickedLink(button)
        const clickedOption = button.dataset.option 
        renderCards(clickedOption)
    })
})

