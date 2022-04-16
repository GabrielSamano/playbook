const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   console.log("Ejercicio 2.1:")
   explorers.forEach(item => console.log(item.name))

   console.log("Ejercicio 2.2:")
   explorers.forEach(item => console.log(item.stack))

   console.log("Ejercicio 2.3:")
   const newlist = explorers.map(new_explorers => new_explorers.stack)
   console.log(newlist)

   const explorers_js = explorers.filter(new_explorers => new_explorers.stack.includes("js"))
   console.log("Ejercicio 2.4:")
   console.log(explorers_js)

   const explorer_mx = explorers.find(new_explorers => new_explorers.city.includes("CDMX"))
   console.log("Ejercicio 2.5:")
   console.log(explorer_mx)

   const all_exercise = explorers.reduce((acc,new_explorers) => acc + new_explorers.exercises_completed, 0)
   console.log("Ejercicio 2.6:")
   console.log(all_exercise)

   const True_false = explorers.some(new_explorers => new_explorers.exercisesFinished === false )
   console.log("Ejercicio 2.7:")
   console.log(True_false)

   const solo_explor = explorers.every(onboarding => onboarding.isFinished === true)
   console.log("Ejercicio 2.8:")
   console.log(solo_explor)
   



