// --- Data Structure ---
const data = {
"9": [
{id:"g9-l1",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Torque_animation.gif",title:"Chapter 1: Turning Effect of Force",concepts:["Resultant Force: Calculated depending on the direction of the acting forces.","Resolving Force: A force can be broken down into horizontal and vertical components.","Moment of a force: The turning effect produced by a force.","Principle of moment: For equilibrium, Anti-clockwise moment = Clockwise moment \\( M_{ACW} = M_{CW} \\)."],definitions:[],examples:[],
equations:[
{section:"Resultant Force",name:"Resultant: Opposite direction",formula:"\\( R = |a - b| \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"}]},
{section:"Resultant Force",name:"Resultant: Same direction",formula:"\\( R = a + b \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"}]},
{section:"Resultant Force",name:"Resultant: At 90° angle",formula:"\\( R = \\sqrt{a^2 + b^2} \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"}]},
{section:"Resultant Force",name:"Resultant: At angle α",formula:"\\( R = \\sqrt{a^2 + b^2 + 2ab \\cos \\alpha} \\)",symbols:[{symbol:"R",desc:"Resultant Force (N)"},{symbol:"a, b",desc:"Component Forces (N)"},{symbol:"α",desc:"Angle between forces (° or rad)"}]},
{section:"Resolving Force",name:"Horizontal Force",formula:"\\( F_x = F \\cos \\theta \\)",symbols:[{symbol:"F_x",desc:"Horizontal Force (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Resolving Force",name:"Vertical Force",formula:"\\( F_y = F \\sin \\theta \\)",symbols:[{symbol:"F_y",desc:"Vertical Force (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Direction",name:"Direction of a resultant force",formula:"\\( \\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right) = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\)",symbols:[{symbol:"θ",desc:"Direction Angle (° or rad)"},{symbol:"b",desc:"Opposite Force (N)"},{symbol:"a",desc:"Adjacent Force (N)"}]},
{section:"Moment",name:"Moment of a force",formula:"\\( M = F \\times d_{\\perp} \\)",symbols:[{symbol:"M",desc:"Moment of Force (N·m)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"d_⊥",desc:"Perpendicular distance (m)"}]},
{section:"Moment",name:"Two parallel forces",formula:"\\( F_1 d_1 = F_2 d_2 \\Rightarrow \\frac{F_1}{F_2} = \\frac{d_2}{d_1} \\)",symbols:[{symbol:"F_1, F_2",desc:"Parallel Forces (N)"},{symbol:"d_1, d_2",desc:"Distances from pivot (m)"}]},
{section:"Moment",name:"Principle of moment",formula:"\\( M_{ACW} = M_{CW} \\)",symbols:[{symbol:"M_{ACW}",desc:"Anti-Clockwise Moment (N·m)"},{symbol:"M_{CW}",desc:"Clockwise Moment (N·m)"}]},
{section:"Moment",name:"Net moment",formula:"\\( M_{net} = M_{ACW} - M_{CW} \\)",symbols:[{symbol:"M_{net}",desc:"Net Moment (N·m)"}]},
{section:"Moment",name:"Force Components",formula:"\\( F_A = \\frac{F \\times OB}{AB} \\), \\( F_B = \\frac{F \\times OA}{AB} \\)",symbols:[{symbol:"F_A, F_B",desc:"Reaction Forces (N)"},{symbol:"F",desc:"Applied Force (N)"},{symbol:"OA, OB, AB",desc:"Distances along beam (m)"}]}
],flashcards:[
{front:"How do you calculate the resultant of two forces acting in opposite directions?", back:"\\( R = |a - b| \\)"},
{front:"How do you calculate the resultant of two forces acting in the same direction?", back:"\\( R = a + b \\)"},
{front:"What is the formula for the resultant of two forces acting at a 90° angle?", back:"\\( R = \\sqrt{a^2 + b^2} \\)"},
{front:"What is the general formula for the resultant of two forces acting at an angle \\(\\alpha\\)?", back:"\\( R = \\sqrt{a^2 + b^2 + 2ab \\cos \\alpha} \\)"},
{front:"How do you find the horizontal component of a force?", back:"\\( F_x = F \\cos \\theta \\)"},
{front:"How do you find the vertical component of a force?", back:"\\( F_y = F \\sin \\theta \\)"},
{front:"What is the formula for finding the direction (angle) of a resultant force?", back:"\\( \\theta = \\tan^{-1}\\left(\\frac{b}{a}\\right) \\)"},
{front:"What is the definition of the moment of a force?", back:"\\( M = F \\times d_{\\perp} \\)"},
{front:"What is the principle of moments for an object in equilibrium?", back:"Anti-clockwise moment = Clockwise moment \\( (M_{ACW} = M_{CW}) \\)"},
{front:"How is the net moment calculated?", back:"\\( M_{net} = M_{ACW} - M_{CW} \\)"}
],quiz:[
{question:"Which formula correctly represents the horizontal component of a force?", options:["\\( F_x = F \\sin \\theta \\)","\\( F_x = F \\cos \\theta \\)","\\( F_x = F \\tan \\theta \\)","\\( F_x = F / \\cos \\theta \\)"], correctIndex:1, feedback:"The horizontal component uses the cosine function, assuming \\(\\theta\\) is the angle with the horizontal."},
{question:"Which formula correctly represents the vertical component of a force?", options:["\\( F_y = F \\sin \\theta \\)","\\( F_y = F \\cos \\theta \\)","\\( F_y = F \\tan \\theta \\)","\\( F_y = F / \\sin \\theta \\)"], correctIndex:0, feedback:"The vertical component uses the sine function, \\( F_y = F \\sin \\theta \\)."},
{question:"When two parallel forces act on a beam in equilibrium, which relation is correct?", options:["\\( F_1 / d_1 = F_2 / d_2 \\)","\\( F_1 + d_1 = F_2 + d_2 \\)","\\( F_1 d_1 = F_2 d_2 \\)","\\( F_1 d_2 = F_2 d_1 \\)"], correctIndex:2, feedback:"According to the principle of moments, the force times its distance from the pivot is balanced: \\( F_1 d_1 = F_2 d_2 \\)."},
{question:"If two forces 3N and 4N act at a 90° angle, what is the magnitude of the resultant force?", options:["1N","7N","5N","12N"], correctIndex:2, feedback:"Using Pythagoras' theorem: \\( R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5 \\text{N} \\)."},
{question:"If two forces 5N and 2N act in opposite directions, what is the resultant force?", options:["7N","3N","10N","2.5N"], correctIndex:1, feedback:"For opposite directions, subtract the smaller force from the larger one: \\( |5 - 2| = 3 \\text{N} \\)."},
{question:"What is the correct SI unit for the moment of a force?", options:["N","J","N·m","N/m"], correctIndex:2, feedback:"Moment is Force multiplied by distance, giving Newton-meters (N·m)."},
{question:"How do you calculate the resultant of two forces acting in the same direction?", options:["Subtract them","Multiply them","Divide them","Add them"], correctIndex:3, feedback:"Forces in the same direction simply add together: \\( R = a + b \\)."},
{question:"What does \\( M_{net} \\) represent?", options:["Total force","Net moment (difference between ACW and CW moments)","Mass of the beam","Mechanical advantage"], correctIndex:1, feedback:"Net moment is the difference between Anti-clockwise and Clockwise moments: \\( M_{net} = M_{ACW} - M_{CW} \\)."},
{question:"Which expression gives the direction angle \\(\\theta\\) of a resultant force?", options:["\\( \\sin^{-1}(b/a) \\)","\\( \\cos^{-1}(b/a) \\)","\\( \\tan^{-1}(b/a) \\)","\\( \\tan^{-1}(a/b) \\)"], correctIndex:2, feedback:"The angle is found using the inverse tangent of the opposite over adjacent components: \\( \\tan^{-1}(b/a) \\)."},
{question:"For reaction forces on a beam supported at A and B with a load F, what is the force \\( F_A \\)?", options:["\\( F_A = F \\times \\frac{OA}{AB} \\)","\\( F_A = F \\times \\frac{OB}{AB} \\)","\\( F_A = F + OB \\)","\\( F_A = \\frac{AB}{F} \\)"], correctIndex:1, feedback:"By taking moments about B, \\( F_A \\times AB = F \\times OB \\), so \\( F_A = F \\times \\frac{OB}{AB} \\)."}
]},
{id:"g9-l2",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Atwood_s_swinging_machine.gif",title:"Chapter 2: Simple Machines",concepts:[],definitions:[],examples:[],
equations:[
{section:"Lever",name:"Lever Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"},{symbol:"F_R",desc:"Load Force (N)"},{symbol:"F_E",desc:"Effort Force (N)"},{symbol:"d_E",desc:"Effort Arm (m)"},{symbol:"d_R",desc:"Load Arm (m)"}]},
{section:"Lever",name:"Lever Efficiency",formula:"\\( eff = \\frac{F_R \\times d_R}{F_E \\times d_E} \\times 100\\% = \\frac{MA}{VR} \\times 100\\% \\)",symbols:[{symbol:"eff",desc:"Efficiency (%)"},{symbol:"VR",desc:"Velocity Ratio (No unit)"}]},
{section:"Inclined Plane",name:"Inclined Plane Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{L}{h} \\)",symbols:[{symbol:"L",desc:"Length of incline (m)"},{symbol:"h",desc:"Height of incline (m)"}]},
{section:"Inclined Plane",name:"Inclined Plane Work done",formula:"\\( W_E = F_E \\times L, W_R = F_R \\times h \\)",symbols:[{symbol:"W_E",desc:"Work by Effort (J)"},{symbol:"W_R",desc:"Work on Load (J)"}]},
{section:"Inclined Plane",name:"If no friction",formula:"\\( W_E = W_R \\Leftrightarrow F_E L = F_R h \\)",symbols:[{symbol:"W_E",desc:"Work by Effort (J)"},{symbol:"W_R",desc:"Work on Load (J)"},{symbol:"F_E",desc:"Effort Force (N)"},{symbol:"F_R",desc:"Load Force (N)"},{symbol:"L",desc:"Length of incline (m)"},{symbol:"h",desc:"Height of incline (m)"}]},
{section:"Pulley",name:"Pulley Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\text{# of cables} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"}]},
{section:"Pulley",name:"Pulley Velocity Ratio",formula:"\\( VR = \\frac{d_E}{d_R} \\)",symbols:[{symbol:"d_E",desc:"Distance moved by effort (m)"},{symbol:"d_R",desc:"Distance moved by load (m)"}]},
{section:"Gears System",name:"Gears System Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{N_R}{N_E} = \\frac{r_R}{r_E} = \\frac{d_R}{d_E} \\)",symbols:[{symbol:"N_R, N_E",desc:"Number of teeth"},{symbol:"r_R, r_E",desc:"Radii (m)"},{symbol:"d_R, d_E",desc:"Diameters (m)"}]},
{section:"Gears System",name:"Gear Ratio (GR)",formula:"\\( GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E} \\)",symbols:[{symbol:"GR",desc:"Gear Ratio (No unit)"}]},
{section:"Gears System",name:"Relation of turns-teeth",formula:"\\( N_E t_E = N_R t_R \\Leftrightarrow \\frac{N_E}{N_R} = \\frac{t_R}{t_E} \\)",symbols:[{symbol:"N",desc:"Number of turns (rev)"},{symbol:"t",desc:"Number of teeth"}]},
{section:"Belt System",name:"Belt System Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{R_R}{R_E} \\)",symbols:[{symbol:"R_R, R_E",desc:"Radii of pulleys (m)"}]},
{section:"Belt System",name:"Belt System Turns and diameter",formula:"\\( N_E D_E = N_R D_R \\)",symbols:[{symbol:"D_E, D_R",desc:"Diameters (m)"}]},
{section:"Wheel and Axle",name:"Wheel and Axle Moment",formula:"\\( M_E = F_E \\times R, M_R = F_R \\times r \\)",symbols:[{symbol:"R",desc:"Radius of wheel (m)"},{symbol:"r",desc:"Radius of axle (m)"}]},
{section:"Wheel and Axle",name:"Wheel and Axle Mechanical advantage",formula:"\\( MA = \\frac{F_R}{F_E} = \\frac{R}{r} \\)",symbols:[{symbol:"MA",desc:"Mechanical Advantage (No unit)"}]},
{section:"Wheel and Axle",name:"Wheel and Axle Velocity Ratio",formula:"\\( VR = \\frac{2\\pi R}{2\\pi r} = \\frac{R}{r} \\)",symbols:[{symbol:"VR",desc:"Velocity Ratio (No unit)"}]}
],flashcards:[
{front:"What is the formula for the Mechanical Advantage (MA) of a lever?", back:"\\( MA = \\frac{F_R}{F_E} = \\frac{d_E}{d_R} \\)"},
{front:"How do you calculate the Efficiency of a lever?", back:"\\( eff = \\frac{MA}{VR} \\times 100\\% \\)"},
{front:"What is the Mechanical Advantage of an inclined plane?", back:"\\( MA = \\frac{L}{h} \\)"},
{front:"In an inclined plane with no friction, how are effort and load related?", back:"\\( F_E L = F_R h \\)"},
{front:"How is the Velocity Ratio of a pulley calculated?", back:"\\( VR = \\frac{d_E}{d_R} \\)"},
{front:"What is the Mechanical Advantage formula for a gear system?", back:"\\( MA = \\frac{N_R}{N_E} \\)"},
{front:"What is the Gear Ratio (GR)?", back:"\\( GR = \\frac{N_R}{N_E} = \\frac{d_R}{d_E} \\)"},
{front:"What is the relation between turns and teeth in a gear system?", back:"\\( N_E t_E = N_R t_R \\)"},
{front:"How is the Mechanical Advantage of a wheel and axle found?", back:"\\( MA = \\frac{R}{r} \\)"},
{front:"What is the Velocity Ratio of a wheel and axle?", back:"\\( VR = \\frac{R}{r} \\)"}
],quiz:[
{question:"In a lever, if the effort arm is 4m and the load arm is 1m, what is the Mechanical Advantage?", options:["0.25","4","5","3"], correctIndex:1, feedback:"MA = Effort Arm / Load Arm = 4 / 1 = 4."},
{question:"The formula for the efficiency of a machine is:", options:["\\( MA + VR \\)","\\( \\frac{VR}{MA} \\)","\\( \\frac{MA}{VR} \\times 100\\% \\)","\\( MA \\times VR \\)"], correctIndex:2, feedback:"Efficiency relates the actual mechanical advantage to the theoretical velocity ratio: \\( \\frac{MA}{VR} \\times 100\\% \\)."},
{question:"For an inclined plane of length L and height h, the Mechanical Advantage is:", options:["\\( L \\times h \\)","\\( \\frac{h}{L} \\)","\\( L - h \\)","\\( \\frac{L}{h} \\)"], correctIndex:3, feedback:"The MA of an inclined plane is its length divided by its height: \\( \\frac{L}{h} \\)."},
{question:"If there is no friction on an inclined plane, what is the relationship between work done by effort and work on load?", options:["\\( W_E > W_R \\)","\\( W_E = W_R \\)","\\( W_E < W_R \\)","\\( W_E = 0 \\)"], correctIndex:1, feedback:"In an ideal system with no friction, energy is conserved, so \\( W_E = W_R \\)."},
{question:"The Velocity Ratio of a pulley system depends on:", options:["Distance moved by effort and load","Only the load distance","Force applied","Weight of the pulleys"], correctIndex:0, feedback:"Velocity Ratio is the distance moved by the effort divided by the distance moved by the load \\( (d_E/d_R) \\)."},
{question:"For a gear system, the Mechanical Advantage is equal to:", options:["Ratio of teeth \\((N_R/N_E)\\)","Product of teeth","Difference of teeth","\\( N_E / N_R \\)"], correctIndex:0, feedback:"The MA of gears is the number of teeth on the driven (load) gear divided by the number on the driving (effort) gear."},
{question:"If a driving gear has 10 teeth and turns 5 times, and the driven gear has 25 teeth, how many times does it turn?", options:["2","5","10","12.5"], correctIndex:0, feedback:"Using \\( N_E t_E = N_R t_R \\), we have \\( 5 \\times 10 = N_R \\times 25 \\), so \\( N_R = 2 \\)."},
{question:"In a wheel and axle, what does \\(R\\) typically represent?", options:["Radius of the axle","Radius of the wheel","Revolution rate","Resistance force"], correctIndex:1, feedback:"Usually, \\(R\\) is the radius of the wheel and \\(r\\) is the radius of the axle."},
{question:"Which of the following is the correct formula for Velocity Ratio (VR) of a wheel and axle?", options:["\\( \\frac{r}{R} \\)","\\( R \\times r \\)","\\( \\frac{R}{r} \\)","\\( \\frac{F_R}{F_E} \\)"], correctIndex:2, feedback:"The velocity ratio is the ratio of the radius of the wheel to the radius of the axle \\( (R/r) \\)."},
{question:"The moment of the effort force in a wheel and axle is given by:", options:["\\( F_E / R \\)","\\( F_E \\times r \\)","\\( F_E \\times R \\)","\\( F_R \\times R \\)"], correctIndex:2, feedback:"The effort force acts on the wheel (radius \\(R\\)), so its moment is \\( F_E \\times R \\)."}
]},
{id:"g9-l3",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Electric_circuit.gif",title:"Chapter 3: Electricity",concepts:[],definitions:[],examples:[],
equations:[
{section:"Electrical Power",name:"Definition of power",formula:"\\( P = \\frac{W}{t} = \\frac{E}{t} \\)",symbols:[{symbol:"P",desc:"Power (W)"},{symbol:"W",desc:"Work (J)"},{symbol:"E",desc:"Energy (J)"},{symbol:"t",desc:"Time (s)"}]},
{section:"Electrical Power",name:"Power of current",formula:"\\( P = VI = RI^2 = \\frac{V^2}{R} \\)",symbols:[{symbol:"V",desc:"Voltage (V)"},{symbol:"I",desc:"Current (A)"},{symbol:"R",desc:"Resistance (Ω)"}]},
{section:"Electrical Power",name:"Energy Transfer",formula:"\\( E = QV = VIt = RI^2 t = \\frac{V^2}{R} t \\)",symbols:[{symbol:"Q",desc:"Charge (C)"}]},
{section:"Electrical Power",name:"Cost of using electricity",formula:"\\( \\text{cost} = E(\\text{kWh}) \\times \\text{price/1kWh} \\)",symbols:[{symbol:"E",desc:"Energy (kWh)"},{symbol:"price",desc:"Cost per kWh (Currency)"}]},
{section:"Heat Energy",name:"Heat gained or lost",formula:"\\( Q = mc\\Delta T \\)",symbols:[{symbol:"Q",desc:"Heat Energy (J)"},{symbol:"m",desc:"Mass (kg)"},{symbol:"c",desc:"Specific heat capacity (J/kg·K)"},{symbol:"ΔT",desc:"Change in temp (K or °C)"}]},
{section:"Heat Energy",name:"Specific heat capacity",formula:"\\( c = \\frac{Q}{m\\Delta T} \\)",symbols:[{symbol:"c",desc:"Specific heat capacity (J/kg·K)"}]},
{section:"Heat Energy",name:"Conservation of energy",formula:"\\( E = Q \\Leftrightarrow RI^2 t = mc\\Delta T \\)",symbols:[{symbol:"E",desc:"Electrical Energy (J)"},{symbol:"Q",desc:"Heat Energy (J)"}]},
{section:"Heat Energy",name:"Total Energy",formula:"\\( E_L = E \\times \\% \\text{ light} \\), \\( E_H = E \\times \\% \\text{ heat} \\)",symbols:[{symbol:"E_L",desc:"Light Energy (J)"},{symbol:"E_H",desc:"Heat Energy (J)"}]}
],flashcards:[
{front:"What is the fundamental definition of power?", back:"\\( P = \\frac{W}{t} = \\frac{E}{t} \\)"},
{front:"What is the formula for Electrical Power using current and resistance?", back:"\\( P = RI^2 \\)"},
{front:"What is the formula for Electrical Power using voltage and resistance?", back:"\\( P = \\frac{V^2}{R} \\)"},
{front:"How do you calculate electrical Energy Transfer using Voltage, Current, and Time?", back:"\\( E = VIt \\)"},
{front:"How do you calculate the cost of using electricity?", back:"\\( \\text{cost} = E(\\text{kWh}) \\times \\text{price/1kWh} \\)"},
{front:"What is the formula for heat gained or lost?", back:"\\( Q = mc\\Delta T \\)"},
{front:"What is the formula for Specific Heat Capacity?", back:"\\( c = \\frac{Q}{m\\Delta T} \\)"},
{front:"What is the conservation of energy equation for an electric heater?", back:"\\( RI^2 t = mc\\Delta T \\)"},
{front:"How do you find the Light Energy if a percentage of total energy is converted to light?", back:"\\( E_L = E \\times \\% \\text{ light} \\)"},
{front:"How do you find the Heat Energy if a percentage of total energy is converted to heat?", back:"\\( E_H = E \\times \\% \\text{ heat} \\)"}
],quiz:[
{question:"Which formula correctly represents Electrical Power in terms of Voltage and Current?", options:["\\( P = V / I \\)","\\( P = I / V \\)","\\( P = VI \\)","\\( P = V^2 I \\)"], correctIndex:2, feedback:"Power is the product of voltage and current: \\( P = VI \\)."},
{question:"What is the correct SI unit for Specific Heat Capacity?", options:["J/kg","J/°C","J/kg·K","W/kg·K"], correctIndex:2, feedback:"Specific heat capacity is measured in Joules per kilogram per Kelvin (J/kg·K)."},
{question:"If an appliance uses 2 kWh of energy and the price is $0.50/kWh, what is the total cost?", options:["$2.50","$1.00","$0.25","$4.00"], correctIndex:1, feedback:"Cost = Energy \\( \\times \\) price = 2 \\( \\times \\) 0.50 = $1.00."},
{question:"In the heat equation \\( Q = mc\\Delta T \\), what does \\( \\Delta T \\) represent?", options:["Total Time","Change in Temperature","Thermal Energy","Torque"], correctIndex:1, feedback:"\\( \\Delta T \\) represents the change in temperature (final - initial)."},
{question:"Which formula correctly represents Energy Transfer?", options:["\\( E = QV \\)","\\( E = \\frac{V}{Q} \\)","\\( E = Q^2 V \\)","\\( E = \\frac{Q}{V} \\)"], correctIndex:0, feedback:"Energy transfer is charge multiplied by voltage, \\( E = QV \\)."},
{question:"In the context of conservation of energy (electricity to heat), which equation is correct?", options:["\\( RI^2 = mc\\Delta T \\)","\\( RI^2 t = mc\\Delta T \\)","\\( VI = mc\\Delta T \\)","\\( \\frac{V}{R} t = mc\\Delta T \\)"], correctIndex:1, feedback:"Electrical energy \\( (RI^2 t) \\) is converted into heat energy \\( (mc\\Delta T) \\)."},
{question:"What does the \\( c \\) stand for in \\( Q = mc\\Delta T \\)?", options:["Speed of light","Capacitance","Specific heat capacity","Current"], correctIndex:2, feedback:"In thermodynamics, \\( c \\) stands for specific heat capacity."},
{question:"Electrical energy can be calculated using which combination of variables?", options:["V, I, R","V, I, t","P, V, R","Q, c, t"], correctIndex:1, feedback:"Electrical energy \\( E = VIt \\)."},
{question:"If 20% of electrical energy is converted to light, how is the light energy found?", options:["\\( E_L = E / 0.20 \\)","\\( E_L = E \\times 0.20 \\)","\\( E_L = E + 20 \\)","\\( E_L = E - 20 \\)"], correctIndex:1, feedback:"Multiply the total energy by the efficiency percentage (0.20)."},
{question:"What is the formula for Power using Voltage and Resistance?", options:["\\( P = V^2 / R \\)","\\( P = V / R^2 \\)","\\( P = V^2 R \\)","\\( P = R / V^2 \\)"], correctIndex:0, feedback:"Substituting \\( I = V/R \\) into \\( P = VI \\) gives \\( P = V^2 / R \\)."}
]},
{id:"g9-l4",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/VFPt_solenoid-field-animation.gif",title:"Chapter 4: Magnetic Field",concepts:[],definitions:[],examples:[],
equations:[
{section:"Magnetic Field & Force",name:"Due to a straight wire",formula:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)",symbols:[{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"μ_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"I",desc:"Current (A)"},{symbol:"d",desc:"Distance from wire (m)"}]},
{section:"Magnetic Field & Force",name:"Due to a solenoid",formula:"\\( B = \\frac{\\mu_0 NI}{l} \\)",symbols:[{symbol:"N",desc:"Number of turns"},{symbol:"l",desc:"Length of solenoid (m)"}]},
{section:"Magnetic Field & Force",name:"On a current carrying wire",formula:"\\( F = IlB \\sin \\theta \\)",symbols:[{symbol:"F",desc:"Magnetic Force (N)"},{symbol:"l",desc:"Length of wire (m)"},{symbol:"θ",desc:"Angle (° or rad)"}]},
{section:"Transformers",name:"Transformers Voltage, Turn and Current Ratio",formula:"\\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} = \\frac{I_P}{I_S} \\)",symbols:[{symbol:"V_S, V_P",desc:"Secondary/Primary Voltage (V)"},{symbol:"N_S, N_P",desc:"Secondary/Primary Turns"},{symbol:"I_S, I_P",desc:"Secondary/Primary Current (A)"}]},
{section:"Transformers",name:"Power loss",formula:"\\( P_J = RI^2, P_J = P_{e1} - P_{e2}, P_{e1} = V_P I_P, P_{e2} = V_S I_S \\)",symbols:[{symbol:"P_J",desc:"Joule heating power loss (W)"},{symbol:"P_e1, P_e2",desc:"Input/Output Power (W)"}]}
],flashcards:[
{front:"What is the formula for the magnetic field generated by a straight wire?", back:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)"},
{front:"What is the formula for the magnetic field at the center of a circular wire?", back:"\\( B = \\frac{\\mu_0 NI}{2r} \\)"},
{front:"What is the formula for the magnetic field inside a solenoid?", back:"\\( B = \\frac{\\mu_0 NI}{l} \\)"},
{front:"How do you find the magnetic force on a current-carrying wire?", back:"\\( F = IlB \\sin \\theta \\)"},
{front:"What is the relation between secondary and primary voltages and turns in a transformer?", back:"\\( \\frac{V_S}{V_P} = \\frac{N_S}{N_P} \\)"},
{front:"How do currents relate to turns in an ideal transformer?", back:"\\( \\frac{I_P}{I_S} = \\frac{N_S}{N_P} \\)"},
{front:"How is the input power \\( P_{e1} \\) of a transformer calculated?", back:"\\( P_{e1} = V_P I_P \\)"},
{front:"How is the output power \\( P_{e2} \\) of a transformer calculated?", back:"\\( P_{e2} = V_S I_S \\)"},
{front:"How is the Joule heating power loss calculated?", back:"\\( P_J = RI^2 \\)"},
{front:"How is power loss related to input and output power in a real transformer?", back:"\\( P_J = P_{e1} - P_{e2} \\)"}
],quiz:[
{question:"The magnetic field at a distance \\( d \\) from a straight wire is proportional to:", options:["\\( d \\)","\\( 1/d \\)","\\( d^2 \\)","\\( 1/d^2 \\)"], correctIndex:1, feedback:"According to \\( B = \\mu_0 I / 2\\pi d \\), it is inversely proportional to the distance \\( d \\)."},
{question:"For a solenoid, the magnetic field is given by:", options:["\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)","\\( B = \\mu_0 NI \\)","\\( B = \\frac{\\mu_0 NI}{l} \\)","\\( B = \\frac{\\mu_0 N}{Il} \\)"], correctIndex:2, feedback:"The magnetic field inside a solenoid depends on the number of turns and its length: \\( B = \\frac{\\mu_0 NI}{l} \\)."},
{question:"The magnetic force on a wire is maximum when the angle \\( \\theta \\) between the wire and magnetic field is:", options:["0°","45°","90°","180°"], correctIndex:2, feedback:"Force \\( F = IlB \\sin \\theta \\). Sine is maximum (1) at 90°."},
{question:"In a step-up transformer, which of the following is true?", options:["\\( V_S > V_P \\)","\\( V_S < V_P \\)","\\( N_S < N_P \\)","\\( I_S > I_P \\)"], correctIndex:0, feedback:"A step-up transformer increases voltage, meaning \\( V_S > V_P \\) and \\( N_S > N_P \\)."},
{question:"What happens to the current in a step-up transformer? (Assume ideal)", options:["It increases","It decreases","It stays the same","It drops to zero"], correctIndex:1, feedback:"In an ideal transformer, power is conserved (\\( V_P I_P = V_S I_S \\)). Since voltage goes up in a step-up transformer, current must go down."},
{question:"If a transformer has 100 primary turns and 500 secondary turns, what is the voltage ratio \\( V_S / V_P \\)?", options:["1/5","5","25","1/25"], correctIndex:1, feedback:"The ratio of voltages equals the ratio of turns: \\( 500 / 100 = 5 \\)."},
{question:"Joule heating power loss in transmission lines is calculated as:", options:["\\( V^2 / R \\)","\\( RI^2 \\)","\\( VI \\)","\\( P / t \\)"], correctIndex:1, feedback:"Joule heating loss is \\( P_J = RI^2 \\)."},
{question:"In a circular wire of \\( N \\) turns and radius \\( r \\), the magnetic field at the center is:", options:["\\( \\frac{\\mu_0 NI}{2r} \\)","\\( \\frac{\\mu_0 I}{2\\pi r} \\)","\\( \\frac{\\mu_0 NI}{l} \\)","\\( \\frac{\\mu_0 N}{I} \\)"], correctIndex:0, feedback:"For a circular coil, \\( B = \\frac{\\mu_0 NI}{2r} \\)."},
{question:"What does \\( \\mu_0 \\) represent?", options:["Permittivity","Permeability of free space","Refractive index","Resistivity"], correctIndex:1, feedback:"\\( \\mu_0 \\) is the permeability of free space (vacuum permeability)."},
{question:"The output power of a transformer is given by:", options:["\\( V_P I_P \\)","\\( V_S I_S \\)","\\( V_P I_S \\)","\\( V_S I_P \\)"], correctIndex:1, feedback:"Output power (Secondary side) is \\( P_{e2} = V_S I_S \\)."}
]},
{id:"g9-l5",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Refraction_animation.gif",title:"Chapter 5: Light",concepts:[],definitions:[],examples:[],
equations:[
{section:"Reflection of light",name:"Law of Reflection",formula:"\\( i = r \\)",symbols:[{symbol:"i",desc:"Angle of incidence (°)"},{symbol:"r",desc:"Angle of reflection (°)"}]},
{section:"Reflection of light",name:"Pinhole Camera",formula:"\\( m = \\frac{h_i}{h_o} = \\frac{d_i}{d_o} \\)",symbols:[{symbol:"m",desc:"Magnification (No unit)"},{symbol:"h_i, h_o",desc:"Image/Object height (m)"},{symbol:"d_i, d_o",desc:"Image/Object distance (m)"}]},
{section:"Refraction of light",name:"Refractive index",formula:"\\( n = \\frac{c}{v} \\)",symbols:[{symbol:"n",desc:"Refractive index (No unit)"},{symbol:"c",desc:"Speed of light in vacuum (m/s)"},{symbol:"v",desc:"Speed of light in medium (m/s)"}]},
{section:"Refraction of light",name:"Real depth and apparent depth",formula:"\\( n = \\frac{\\text{real depth}}{\\text{apparent depth}} = \\frac{H}{h} \\)",symbols:[{symbol:"H",desc:"Real depth (m)"},{symbol:"h",desc:"Apparent depth (m)"}]},
{section:"Refraction of light",name:"Snell’s Law",formula:"\\( n_1 \\sin i = n_2 \\sin r \\)",symbols:[{symbol:"n_1, n_2",desc:"Refractive indices of medium 1 and 2"}]},
{section:"Refraction of light",name:"Critical Angle",formula:"\\( \\sin \\theta_c = \\frac{n_2}{n_1} \\)",symbols:[{symbol:"θ_c",desc:"Critical angle (°)"}]},
{section:"Mirrors & Lenses",name:"Mirror/Lens Equation",formula:"\\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\Rightarrow f = \\frac{d_i d_o}{d_i + d_o} \\)",symbols:[{symbol:"f",desc:"Focal length (m)"},{symbol:"d_o",desc:"Object distance (m)"},{symbol:"d_i",desc:"Image distance (m)"}]},
{section:"Mirrors & Lenses",name:"Object's distance",formula:"\\( d_o = \\frac{f d_i}{d_i - f} \\)",symbols:[{symbol:"d_o",desc:"Object distance (m)"},{symbol:"d_i",desc:"Image distance (m)"},{symbol:"f",desc:"Focal length (m)"}]},
{section:"Mirrors & Lenses",name:"Image's distance",formula:"\\( d_i = \\frac{f d_o}{d_o - f} \\)",symbols:[{symbol:"d_o",desc:"Object distance (m)"},{symbol:"d_i",desc:"Image distance (m)"},{symbol:"f",desc:"Focal length (m)"}]},
{section:"Mirrors & Lenses",name:"Radius & focal length relation",formula:"\\( f = \\frac{R}{2} \\Rightarrow R = 2f \\)",symbols:[{symbol:"R",desc:"Radius of curvature (m)"}]},
{section:"Mirrors & Lenses",name:"Magnification",formula:"\\( M = \\frac{d_i}{d_o} = -\\frac{h_i}{h_o} \\)",symbols:[{symbol:"M",desc:"Magnification (No unit)"}]}
],flashcards:[
{front:"What is the Law of Reflection?", back:"\\( i = r \\)"},
{front:"What is Snell's Law?", back:"\\( n_1 \\sin i = n_2 \\sin r \\)"},
{front:"How is the refractive index related to light speed in the mediums?", back:"\\( \\frac{n_2}{n_1} = \\frac{v_1}{v_2} \\)"},
{front:"How is the refractive index calculated using real and apparent depth?", back:"\\( n = \\frac{H}{h} \\)"},
{front:"What is the formula for the critical angle?", back:"\\( \\sin \\theta_c = \\frac{n_2}{n_1} \\)"},
{front:"What is the Mirror/Lens Equation?", back:"\\( \\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i} \\)"},
{front:"How can you find the image distance directly from focal length and object distance?", back:"\\( d_i = \\frac{f d_o}{d_o - f} \\)"},
{front:"How can you find the object distance directly from focal length and image distance?", back:"\\( d_o = \\frac{f d_i}{d_i - f} \\)"},
{front:"How are the focal length and radius of curvature related?", back:"\\( f = \\frac{R}{2} \\)"},
{front:"What is the formula for magnification in terms of object and image distance?", back:"\\( M = \\frac{d_i}{d_o} \\)"}
],quiz:[
{question:"According to the Law of Reflection:", options:["\\( i < r \\)","\\( i > r \\)","\\( i = r \\)","\\( i + r = 90^\\circ \\)"], correctIndex:2, feedback:"The angle of incidence is exactly equal to the angle of reflection."},
{question:"When light travels from a less dense (vacuum) to a more dense medium, its speed:", options:["Increases","Decreases","Stays the same","Becomes zero"], correctIndex:1, feedback:"Speed of light is slower in a denser medium, which is why \\( n = c / v \\) is greater than 1."},
{question:"The formula to calculate the critical angle is:", options:["\\( \\cos \\theta_c = \\frac{n_2}{n_1} \\)","\\( \\sin \\theta_c = \\frac{n_1}{n_2} \\)","\\( \\sin \\theta_c = \\frac{n_2}{n_1} \\)","\\( \\tan \\theta_c = \\frac{n_2}{n_1} \\)"], correctIndex:2, feedback:"The critical angle is found using the inverse sine of the ratio of the two refractive indices: \\( \\sin \\theta_c = n_2 / n_1 \\)."},
{question:"For a spherical mirror, if the radius of curvature is 20cm, what is the focal length?", options:["40cm","10cm","20cm","5cm"], correctIndex:1, feedback:"Focal length \\( f = R/2 \\), so \\( 20 / 2 = 10 \\text{cm} \\)."},
{question:"In the mirror equation, what does \\( d_o \\) represent?", options:["Object distance","Image distance","Focal length","Optical density"], correctIndex:0, feedback:"\\( d_o \\) stands for object distance."},
{question:"Magnification is given by which distance ratio?", options:["\\( d_o / d_i \\)","\\( d_i / d_o \\)","\\( d_o \\times d_i \\)","\\( f / d_o \\)"], correctIndex:1, feedback:"Magnification \\( M = d_i / d_o \\)."},
{question:"Which formula relates real depth (H) and apparent depth (h) to the refractive index (n)?", options:["\\( n = h / H \\)","\\( n = H / h \\)","\\( n = H \\times h \\)","\\( n = H - h \\)"], correctIndex:1, feedback:"Refractive index \\( n = \\text{real depth} / \\text{apparent depth} = H / h \\)."},
{question:"What happens to the wavelength of light when entering a medium with a higher refractive index?", options:["Increases","Decreases","Stays same","Drops to zero"], correctIndex:1, feedback:"Because speed decreases and frequency remains constant, wavelength must decrease."},
{question:"Which of these is a correct form of Snell's Law?", options:["\\( \\sin i / \\sin r = n_1 / n_2 \\)","\\( n_1 \\sin i = n_2 \\sin r \\)","\\( \\cos i / \\cos r = n_2 / n_1 \\)","\\( i / r = n_2 / n_1 \\)"], correctIndex:1, feedback:"\\( n_1 \\sin i = n_2 \\sin r \\) is the most standard form."},
{question:"To find the image distance \\( d_i \\) given \\( f \\) and \\( d_o \\), you can use:", options:["\\( f d_o / (d_o - f) \\)","\\( f + d_o \\)","\\( d_o - f \\)","\\( f d_o \\)"], correctIndex:0, feedback:"Algebraic rearrangement of the mirror equation yields \\( d_i = \\frac{f d_o}{d_o - f} \\)."}
]}
],
"12": [
{id:"g12-l1",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Translational_motion.gif",title:"Lesson 1: Kinetic Theory of Ideal Gases",concepts:[],definitions:[],examples:[],
equations:[
{section:"Pressure",name:"Pressure in Kinetic Theory",formula:"\\( P = \\left(\\frac{2}{3}\\right)\\left(\\frac{N}{V}\\right)K_{av} \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"N",desc:"Number of molecules"},{symbol:"V",desc:"Volume (m³)"},{symbol:"K_{av}",desc:"Average Kinetic Energy (J)"}]},
{section:"Pressure",name:"Pressure exerted on container walls",formula:"\\( P = \\frac{F}{A}, F = \\frac{\\Delta p}{\\Delta t}, \\Delta p = N m_0 \\Delta v \\)",symbols:[{symbol:"F",desc:"Force (N)"},{symbol:"A",desc:"Area (m²)"},{symbol:"Δp",desc:"Change in momentum (kg·m/s)"},{symbol:"Δt",desc:"Time interval (s)"}]},
{section:"Pressure",name:"Elastic collision",formula:"\\( P = \\frac{2 N m_0 v}{A \\Delta t} \\)",symbols:[{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"v",desc:"Velocity (m/s)"}]},
{section:"Pressure",name:"Inelastic collision",formula:"\\( P = \\frac{N m_0 v}{A \\Delta t} \\)",symbols:[{symbol:"P",desc:"Pressure (Pa)"},{symbol:"N",desc:"Number of molecules"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"v",desc:"Velocity (m/s)"},{symbol:"A",desc:"Area (m²)"},{symbol:"\\Delta t",desc:"Time interval (s)"}]},
{section:"Ideal Gas Laws",name:"Ideal Gases equation",formula:"\\( PV = nRT, PV = N k_B T \\)",symbols:[{symbol:"n",desc:"Number of moles (mol)"},{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"T",desc:"Temperature (K)"},{symbol:"k_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"}]},
{section:"Ideal Gas Laws",name:"Combined gas law",formula:"\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isobaric process",formula:"\\( \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\)",symbols:[{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isochoric process",formula:"\\( \\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"T_1, T_2",desc:"Initial/Final Temperature (K)"}]},
{section:"Ideal Gas Laws",name:"Isothermal process",formula:"\\( P_1 V_1 = P_2 V_2 \\)",symbols:[{symbol:"P_1, P_2",desc:"Initial/Final Pressure (Pa)"},{symbol:"V_1, V_2",desc:"Initial/Final Volume (m³)"}]},
{section:"Kinetic Energy & Speed",name:"Average kinetic Energy",formula:"\\( K_{av} = \\frac{1}{2}m_0(v^2)_{av} = \\frac{3}{2} \\frac{PV}{N} = \\frac{3}{2} k_B T \\)",symbols:[{symbol:"(v^2)_{av}",desc:"Average of velocity squared (m²/s²)"}]},
{section:"Kinetic Energy & Speed",name:"Total average kinetic Energy",formula:"\\( K = N K_{av} = \\frac{3}{2} N k_B T = \\frac{3}{2} nRT = \\frac{3}{2} PV \\)",symbols:[{symbol:"K",desc:"Total Kinetic Energy (J)"}]},
{section:"Kinetic Energy & Speed",name:"Root-mean-square speed",formula:"\\( v_{rms} = \\sqrt{(v^2)_{av}} = \\sqrt{\\frac{3 k_B T}{m_0}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3P}{\\rho}} \\)",symbols:[{symbol:"v_{rms}",desc:"Root-mean-square speed (m/s)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"ρ",desc:"Density (kg/m³)"}]},
{section:"Fundamental Relations",name:"Number of moles",formula:"\\( n = \\frac{m}{M} = \\frac{N}{N_A} \\)",symbols:[{symbol:"m",desc:"Total mass (kg)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"}]},
{section:"Fundamental Relations",name:"Object’s mass",formula:"\\( m = n M = m_0 N \\)",symbols:[{symbol:"m",desc:"Total mass (kg)"},{symbol:"n",desc:"Number of moles (mol)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"N",desc:"Number of molecules"}]},
{section:"Fundamental Relations",name:"Molar Mass",formula:"\\( M = m_0 N_A = \\frac{m}{n} \\)",symbols:[{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"},{symbol:"m",desc:"Total mass (kg)"},{symbol:"n",desc:"Number of moles (mol)"}]},
{section:"Fundamental Relations",name:"Mass molecules",formula:"\\( m_0 = \\frac{M}{N_A} = \\frac{m}{N} \\)",symbols:[{symbol:"m_0",desc:"Mass of one molecule (kg)"},{symbol:"M",desc:"Molar Mass (kg/mol)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"},{symbol:"m",desc:"Total mass (kg)"},{symbol:"N",desc:"Number of molecules"}]},
{section:"Fundamental Relations",name:"Universal Gas constant",formula:"\\( R = K_B N_A = 8.31 \\text{ J/mol.K} \\)",symbols:[{symbol:"R",desc:"Universal Gas Constant (8.31 J/mol·K)"},{symbol:"K_B",desc:"Boltzmann constant (1.38×10⁻²³ J/K)"},{symbol:"N_A",desc:"Avogadro's Number (6.02×10²³ mol⁻¹)"}]}
],flashcards:[
{front:"What is the formula for Pressure in Kinetic Theory?", back:"\\( P = \\left(\\frac{2}{3}\\right)\\left(\\frac{N}{V}\\right)K_{av} \\)"},
{front:"What is the pressure formula for elastic collisions?", back:"\\( P = \\frac{2 N m_0 v}{A \\Delta t} \\)"},
{front:"What is the pressure formula for inelastic collisions?", back:"\\( P = \\frac{N m_0 v}{A \\Delta t} \\)"},
{front:"What is the Ideal Gases equation?", back:"\\( PV = nRT \\) or \\( PV = N k_B T \\)"},
{front:"What is the Combined Gas Law?", back:"\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)"},
{front:"What is the relationship in an isobaric process?", back:"\\( \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\)"},
{front:"What is the relationship in an isochoric process?", back:"\\( \\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\)"},
{front:"What is the relationship in an isothermal process?", back:"\\( P_1 V_1 = P_2 V_2 \\)"},
{front:"What is the formula for root-mean-square speed?", back:"\\( v_{rms} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3 k_B T}{m_0}} \\)"},
{front:"What is the average kinetic energy of a molecule?", back:"\\( K_{av} = \\frac{3}{2} k_B T \\)"}
],quiz:[
{question:"Which formula correctly represents the Root-mean-square speed?", options:["\\( v_{rms} = \\sqrt{\\frac{3 k_B T}{m_0}} \\)","\\( v_{rms} = \\frac{3 k_B T}{m_0} \\)","\\( v_{rms} = \\sqrt{\\frac{2 k_B T}{m_0}} \\)","\\( v_{rms} = \\frac{3RT}{M^2} \\)"], correctIndex:0, feedback:"Root-mean-square speed depends on temperature and mass: \\( \\sqrt{3 k_B T / m_0} \\)."},
{question:"In an isochoric process, which variable is held constant?", options:["Pressure","Temperature","Volume","Internal Energy"], correctIndex:2, feedback:"Isochoric means constant volume, so \\( P_1 / T_1 = P_2 / T_2 \\)."},
{question:"In an isobaric process, which variable is held constant?", options:["Pressure","Temperature","Volume","Density"], correctIndex:0, feedback:"Isobaric refers to a process that happens at constant pressure."},
{question:"In an isothermal process, which of the following remains constant?", options:["Pressure","Temperature","Volume","Heat"], correctIndex:1, feedback:"Isothermal means the temperature remains constant, giving \\( P_1 V_1 = P_2 V_2 \\)."},
{question:"What is the standard value of the Universal Gas Constant \\( R \\)?", options:["\\( 1.38 \\times 10^{-23} \\)","8.31 J/mol·K","6.02 \\( \\times 10^{23} \\)","\\( 4\\pi \\times 10^{-7} \\)"], correctIndex:1, feedback:"\\( R = 8.31 \\text{ J/mol.K} \\)."},
{question:"The total mass of a gas \\( m \\) is related to the number of moles \\( n \\) and molar mass \\( M \\) by:", options:["\\( m = n/M \\)","\\( m = n + M \\)","\\( m = nM \\)","\\( m = M/n \\)"], correctIndex:2, feedback:"Total mass is moles multiplied by molar mass: \\( m = nM \\)."},
{question:"The average kinetic energy of an ideal gas molecule is directly proportional to:", options:["Pressure","Volume","Temperature","Number of moles"], correctIndex:2, feedback:"\\( K_{av} = \\frac{3}{2} k_B T \\), so it depends solely on absolute temperature."},
{question:"During elastic collisions with a container wall, the momentum change for a single particle bouncing directly back is:", options:["\\( 0 \\)","\\( m_0 v \\)","\\( 2 m_0 v \\)","\\( \\frac{1}{2} m_0 v^2 \\)"], correctIndex:2, feedback:"It rebounds with same speed, so change is \\( v - (-v) = 2v \\). Momentum change is \\( 2m_0 v \\)."},
{question:"Which equation represents the Combined Gas Law?", options:["\\( PV = nRT \\)","\\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)","\\( P_1 T_1 = P_2 T_2 \\)","\\( V_1 / P_1 = V_2 / P_2 \\)"], correctIndex:1, feedback:"The Combined Gas Law is \\( \\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2} \\)."},
{question:"Total kinetic energy \\( K \\) of \\( N \\) molecules is given by:", options:["\\( \\frac{3}{2} N k_B T \\)","\\( \\frac{1}{2} N k_B T \\)","\\( N m_0 v^2 \\)","\\( P V^2 \\)"], correctIndex:0, feedback:"Total kinetic energy is the average energy per molecule multiplied by \\( N \\): \\( \\frac{3}{2} N k_B T \\)."}
]},
{id:"g12-l2",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Boyles_Law_animated.gif",title:"Lesson 2: First Law of Thermodynamic",concepts:[],definitions:[],examples:[],
equations:[
{section:"Work Done",name:"Isobaric Process Work",formula:"\\( W = P \\Delta V \\)",symbols:[{symbol:"W",desc:"Work Done (J)"},{symbol:"P",desc:"Pressure (Pa)"},{symbol:"ΔV",desc:"Change in Volume (m³)"}]},
{section:"Work Done",name:"Linearly Process Work",formula:"\\( W = P_{av} \\Delta V \\)",symbols:[{symbol:"P_{av}",desc:"Average Pressure (Pa)"}]},
{section:"Work Done",name:"Isothermal Process Work",formula:"\\( W = nRT \\ln\\left(\\frac{V_f}{V_i}\\right) \\)",symbols:[{symbol:"V_f, V_i",desc:"Final/Initial Volume (m³)"}]},
{section:"Work Done",name:"Isochoric Process Work",formula:"\\( W = 0 \\)",symbols:[{symbol:"W",desc:"Work Done (J)"}]},
{section:"Internal Energy",name:"Internal energy",formula:"\\( U = \\frac{3}{2} nRT \\)",symbols:[{symbol:"U",desc:"Internal Energy (J)"}]},
{section:"Internal Energy",name:"Changing internal energy",formula:"\\( \\Delta U = U_f - U_i = \\frac{3}{2} nR\\Delta T \\)",symbols:[{symbol:"ΔU",desc:"Change in Internal Energy (J)"},{symbol:"ΔT",desc:"Change in Temperature (K)"}]},
{section:"Heat Transfer",name:"First law of thermodynamics",formula:"\\( Q = W + \\Delta U \\)",symbols:[{symbol:"Q",desc:"Heat added to system (J)"}]},
{section:"Heat Transfer",name:"Heat absorb",formula:"\\( Q = mc\\Delta T \\)",symbols:[{symbol:"m",desc:"Mass (kg)"},{symbol:"c",desc:"Specific heat capacity (J/kg·K)"}]},
{section:"Heat Transfer",name:"Latent Heat",formula:"\\( Q = mL \\)",symbols:[{symbol:"L",desc:"Specific latent heat (J/kg)"}]}
],flashcards:[
{front:"What is the work done in an isobaric process?", back:"\\( W = P \\Delta V \\)"},
{front:"What is the work done in a process where pressure changes linearly?", back:"\\( W = P_{av} \\Delta V \\)"},
{front:"What is the work done in an isothermal process?", back:"\\( W = nRT \\ln\\left(\\frac{V_f}{V_i}\\right) \\)"},
{front:"What is the work done in an isochoric process?", back:"\\( W = 0 \\)"},
{front:"What is the formula for the internal energy of an ideal gas?", back:"\\( U = \\frac{3}{2} nRT \\)"},
{front:"What is the formula for the change in internal energy?", back:"\\( \\Delta U = \\frac{3}{2} nR\\Delta T \\)"},
{front:"What is the First Law of Thermodynamics?", back:"\\( Q = W + \\Delta U \\)"},
{front:"What is the formula for heat absorbed with a temperature change?", back:"\\( Q = mc\\Delta T \\)"},
{front:"What is the formula for latent heat during a phase change?", back:"\\( Q = mL \\)"},
{front:"Does the internal energy of an ideal gas depend on its volume?", back:"No, it depends solely on its absolute temperature \\( T \\)."}
],quiz:[
{question:"How is the work done in an isobaric process calculated?", options:["\\( W = 0 \\)","\\( W = P \\Delta V \\)","\\( W = nRT \\ln(V_f / V_i) \\)","\\( W = P_{av} \\Delta V \\)"], correctIndex:1, feedback:"Isobaric means constant pressure, so \\( W = P \\Delta V \\)."},
{question:"What is the change in internal energy (\\(\\Delta U\\)) for an ideal gas?", options:["\\( \\Delta U = \\frac{3}{2} nR\\Delta T \\)","\\( \\Delta U = Q - W \\)","Both A and B","None of the above"], correctIndex:2, feedback:"It can be calculated from temperature change or from the first law of thermodynamics."},
{question:"In an isochoric process, what is the work done?", options:["\\( P \\Delta V \\)","\\( nRT \\ln(V_f/V_i) \\)","\\( 0 \\)","Depends on temperature"], correctIndex:2, feedback:"Volume does not change (\\(\\Delta V = 0\\)), so \\( W = 0 \\)."},
{question:"According to the First Law of Thermodynamics, heat added to a system equals:", options:["Work done minus internal energy change","Work done plus change in internal energy","Just the work done","Zero"], correctIndex:1, feedback:"\\( Q = W + \\Delta U \\)."},
{question:"Which formula represents work done in an isothermal process?", options:["\\( W = P \\Delta V \\)","\\( W = nRT \\ln(V_f/V_i) \\)","\\( W = P_{av} \\Delta V \\)","\\( W = 0 \\)"], correctIndex:1, feedback:"Because temperature is constant, pressure changes as volume changes, yielding a logarithmic relation."},
{question:"Heat required for a phase change (like melting) is given by:", options:["\\( Q = mc\\Delta T \\)","\\( Q = mL \\)","\\( Q = W \\)","\\( Q = \\Delta U \\)"], correctIndex:1, feedback:"\\( L \\) is the specific latent heat of the substance."},
{question:"What does the \\( c \\) represent in \\( Q = mc\\Delta T \\)?", options:["Speed of light","Capacitance","Specific heat capacity","Constant"], correctIndex:2, feedback:"\\( c \\) stands for specific heat capacity."},
{question:"In a process where volume decreases, the work done by the gas is:", options:["Positive","Negative","Zero","Infinite"], correctIndex:1, feedback:"If \\( \\Delta V \\) is negative, the gas is compressed, so work done by the gas is negative."},
{question:"The internal energy \\( U \\) of an ideal gas is directly proportional to:", options:["Pressure","Volume","Temperature","Density"], correctIndex:2, feedback:"\\( U = \\frac{3}{2} nRT \\), making it directly proportional to absolute temperature."},
{question:"If a gas expands such that its pressure changes linearly with volume, the work done is:", options:["\\( W = 0 \\)","\\( W = P \\Delta V \\)","\\( W = P_{av} \\Delta V \\)","\\( W = nRT \\)"], correctIndex:2, feedback:"You can use the average pressure for a linear process: \\( W = P_{av} \\Delta V \\)."}
]},
{id:"g12-l3",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Carnot_cycle.gif",title:"Lesson 3: Heat Engine",concepts:[],definitions:[],examples:[],
equations:[
{section:"Heat Engine",name:"Conservation of energy (Engine)",formula:"\\( Q_h = W_M + Q_c \\)",symbols:[{symbol:"Q_h",desc:"Heat from hot reservoir (J)"},{symbol:"W_M",desc:"Mechanical Work Done (J)"},{symbol:"Q_c",desc:"Heat rejected to cold reservoir (J)"}]},
{section:"Heat Engine",name:"Ratio",formula:"\\( \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\)",symbols:[{symbol:"T_c",desc:"Cold reservoir temp (K)"},{symbol:"T_h",desc:"Hot reservoir temp (K)"}]},
{section:"Heat Engine",name:"Carnot efficiency",formula:"\\( e_c = \\frac{W_M}{Q_h} = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h} \\)",symbols:[{symbol:"e_c",desc:"Carnot/Ideal Efficiency (No unit)"}]},
{section:"Heat Engine",name:"Overall efficiency",formula:"\\( e = e_c \\times e_M = \\frac{W_U}{Q_h} \\)",symbols:[{symbol:"e",desc:"Overall efficiency (No unit)"},{symbol:"e_M",desc:"Mechanical efficiency (No unit)"},{symbol:"W_U",desc:"Useful Work (J)"}]}
],flashcards:[
{front:"What is the conservation of energy for a heat engine?", back:"\\( Q_h = W_M + Q_c \\)"},
{front:"In an ideal Carnot engine, what is the ratio of heat exchanged to temperature?", back:"\\( \\frac{Q_c}{Q_h} = \\frac{T_c}{T_h} \\)"},
{front:"What is the formula for Carnot (Ideal) efficiency?", back:"\\( e_c = 1 - \\frac{T_c}{T_h} \\)"},
{front:"What is the formula for overall efficiency using useful work?", back:"\\( e = \\frac{W_U}{Q_h} \\)"},
{front:"How is overall efficiency related to Carnot and mechanical efficiency?", back:"\\( e = e_c \\times e_M \\)"},
{front:"What does \\( Q_h \\) represent?", back:"Heat absorbed from the hot reservoir (J)"},
{front:"What does \\( Q_c \\) represent?", back:"Heat rejected or expelled to the cold reservoir (J)"},
{front:"What does \\( W_M \\) represent?", back:"Mechanical Work Done by the engine (J)"},
{front:"What does \\( W_U \\) represent?", back:"Useful Work obtained from the engine (J)"},
{front:"Can Carnot efficiency ever reach 100%?", back:"No, unless the cold reservoir temperature \\( T_c \\) is 0 Kelvin, which is impossible."}
],quiz:[
{question:"In a heat engine, what does \\( Q_c \\) represent?", options:["Heat from the hot reservoir","Useful mechanical work","Heat rejected to the cold reservoir","Overall efficiency"], correctIndex:2, feedback:"\\( Q_c \\) is the heat rejected or expelled to the cold reservoir."},
{question:"Which of these gives the overall efficiency of an engine?", options:["\\( e = \\frac{Q_c}{Q_h} \\)","\\( e = e_c \\times e_M \\)","\\( e = 1 - \\frac{W_M}{Q_h} \\)","\\( e = \\frac{T_c}{T_h} \\)"], correctIndex:1, feedback:"Overall efficiency is the product of Carnot (ideal) efficiency and mechanical efficiency."},
{question:"Carnot efficiency is defined by which formula?", options:["\\( 1 - \\frac{T_h}{T_c} \\)","\\( 1 - \\frac{T_c}{T_h} \\)","\\( \\frac{T_c}{T_h} - 1 \\)","\\( \\frac{Q_h}{Q_c} \\)"], correctIndex:1, feedback:"Carnot efficiency is \\( e_c = 1 - \\frac{T_c}{T_h} \\)."},
{question:"For an ideal Carnot engine, the ratio of heat rejected to heat absorbed (\\( Q_c / Q_h \\)) is equal to:", options:["\\( T_h / T_c \\)","\\( T_c / T_h \\)","\\( W_M / Q_h \\)","\\( 1 \\)"], correctIndex:1, feedback:"In a Carnot cycle, heat ratios equal absolute temperature ratios: \\( Q_c / Q_h = T_c / T_h \\)."},
{question:"Which of the following energy conservation equations is true for any heat engine?", options:["\\( Q_h = W_M + Q_c \\)","\\( W_M = Q_h + Q_c \\)","\\( Q_c = Q_h + W_M \\)","\\( Q_h = W_M - Q_c \\)"], correctIndex:0, feedback:"Heat in equals work out plus heat out: \\( Q_h = W_M + Q_c \\)."},
{question:"If the hot reservoir is 600K and the cold reservoir is 300K, what is the maximum possible (Carnot) efficiency?", options:["25%","33%","50%","100%"], correctIndex:2, feedback:"\\( e_c = 1 - 300/600 = 1 - 0.5 = 0.5 \\) or 50%."},
{question:"What does \\( W_U \\) stand for in the overall efficiency formula?", options:["Wasted Energy","Useful Work","Work of the Universe","Mechanical Work"], correctIndex:1, feedback:"\\( W_U \\) is the Useful Work actually delivered by the engine."},
{question:"The mechanical efficiency \\( e_M \\) of an engine tells us:", options:["How much heat is lost to friction","The ratio of useful work to mechanical work done","The ratio of \\( T_c \\) to \\( T_h \\)","The Carnot efficiency limit"], correctIndex:1, feedback:"It describes how much of the internal mechanical work becomes useful output."},
{question:"Why is a Carnot engine's efficiency always less than 100%?", options:["Because \\( T_h \\) is finite","Because \\( T_c \\) is always greater than 0 K","Because friction exists","Because \\( Q_c \\) is zero"], correctIndex:1, feedback:"Reaching 100% would require \\( T_c = 0\\text{K} \\), which violates the third law of thermodynamics."},
{question:"If an engine absorbs 1000J of heat from the hot reservoir and does 400J of work, how much heat is rejected?", options:["400J","600J","1000J","1400J"], correctIndex:1, feedback:"Using \\( Q_h = W_M + Q_c \\), we find \\( 1000 = 400 + Q_c \\Rightarrow Q_c = 600\\text{J} \\)."}
]},
{id:"g12-l4",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Standing_wave_2.gif",title:"Lesson 4: Superposition and Waves",concepts:[],definitions:[],examples:[],
equations:[
{section:"Sinusoidal Wave",name:"Sinusoidal Wave equation",formula:"\\( y = a \\sin(\\omega t \\pm kx) \\)",symbols:[{symbol:"y",desc:"Displacement (m)"},{symbol:"a",desc:"Amplitude (m)"},{symbol:"ω",desc:"Angular frequency (rad/s)"},{symbol:"t",desc:"Time (s)"},{symbol:"k",desc:"Wave number (rad/m)"},{symbol:"x",desc:"Position (m)"}]},
{section:"Sinusoidal Wave",name:"Angular frequency",formula:"\\( \\omega = \\frac{2\\pi}{T}, k = \\frac{2\\pi}{\\lambda} \\)",symbols:[{symbol:"T",desc:"Period (s)"},{symbol:"λ",desc:"Wavelength (m)"}]},
{section:"Sinusoidal Wave",name:"Wave speed",formula:"\\( v = \\frac{x}{t} = \\frac{\\lambda}{T} = \\frac{\\omega}{k} \\)",symbols:[{symbol:"v",desc:"Wave speed (m/s)"}]},
{section:"Standing Wave",name:"Standing wave equation",formula:"\\( y = 2a \\sin(kx) \\cos(\\omega t) \\)",symbols:[{symbol:"y",desc:"Displacement of standing wave (m)"}]},
{section:"Standing Wave",name:"Minimum amplitude",formula:"\\( A = 0 \\Leftrightarrow \\sin(kx) = 0 \\Rightarrow x = n\\frac{\\lambda}{2} \\)",symbols:[{symbol:"A",desc:"Amplitude envelope (m)"},{symbol:"n",desc:"Integer (0, 1, 2...)"}]},
{section:"Standing Wave",name:"Maximum Amplitude",formula:"\\( A = \\pm 1 \\Leftrightarrow \\sin(kx) = \\pm 1 \\Rightarrow x = (2n + 1)\\frac{\\lambda}{4} \\)",symbols:[{symbol:"A",desc:"Amplitude envelope (m)"},{symbol:"n",desc:"Integer (0, 1, 2...)"},{symbol:"x",desc:"Position (m)"},{symbol:"λ",desc:"Wavelength (m)"}]}
],flashcards:[
{front:"What is the sinusoidal wave equation?", back:"\\( y = a \\sin(\\omega t \\pm kx) \\)"},
{front:"What is the formula for angular frequency \\( \\omega \\)?", back:"\\( \\omega = \\frac{2\\pi}{T} \\)"},
{front:"What is the formula for wave number \\( k \\)?", back:"\\( k = \\frac{2\\pi}{\\lambda} \\)"},
{front:"How do you calculate wave speed \\( v \\)?", back:"\\( v = \\frac{\\lambda}{T} = \\frac{\\omega}{k} \\)"},
{front:"What is the standing wave equation?", back:"\\( y = 2a \\sin(kx) \\cos(\\omega t) \\)"},
{front:"Where do nodes (minimum amplitude) occur in a standing wave?", back:"\\( x = n\\frac{\\lambda}{2} \\)"},
{front:"Where do antinodes (maximum amplitude) occur in a standing wave?", back:"\\( x = (2n + 1)\\frac{\\lambda}{4} \\)"},
{front:"What does \\( y \\) represent in the wave equation?", back:"Displacement of the wave (m)"},
{front:"What does \\( a \\) represent in the wave equation?", back:"Amplitude of the wave (m)"},
{front:"What does the wave number \\( k \\) represent?", back:"Spatial frequency of the wave (rad/m)"}
],quiz:[
{question:"Which formula correctly defines the wave number \\( k \\)?", options:["\\( k = \\frac{2\\pi}{\\omega} \\)","\\( k = \\frac{2\\pi}{\\lambda} \\)","\\( k = \\frac{\\lambda}{T} \\)","\\( k = 2\\pi f \\)"], correctIndex:1, feedback:"The wave number \\( k \\) relates to wavelength: \\( k = 2\\pi / \\lambda \\)."},
{question:"At what positions does a standing wave have minimum amplitude (nodes)?", options:["\\( x = n\\lambda \\)","\\( x = n\\frac{\\lambda}{2} \\)","\\( x = (2n+1)\\frac{\\lambda}{4} \\)","\\( x = n\\frac{\\lambda}{4} \\)"], correctIndex:1, feedback:"Nodes occur where \\( \\sin(kx) = 0 \\), which gives \\( x = n\\lambda / 2 \\)."},
{question:"The angular frequency \\( \\omega \\) is given by:", options:["\\( 2\\pi / T \\)","\\( 2\\pi \\lambda \\)","\\( 2\\pi / k \\)","\\( \\lambda / T \\)"], correctIndex:0, feedback:"Angular frequency \\( \\omega \\) equals \\( 2\\pi / T \\)."},
{question:"In the standing wave equation \\( y = 2a \\sin(kx) \\cos(\\omega t) \\), what is the amplitude envelope?", options:["\\( 2a \\)","\\( 2a \\sin(kx) \\)","\\( \\cos(\\omega t) \\)","\\( a \\sin(kx) \\)"], correctIndex:1, feedback:"The amplitude varies with position \\( x \\) as \\( 2a \\sin(kx) \\)."},
{question:"Wave speed \\( v \\) can be calculated by which of the following?", options:["\\( k / \\omega \\)","\\( \\omega / k \\)","\\( \\omega \\times k \\)","\\( T / \\lambda \\)"], correctIndex:1, feedback:"Speed \\( v = \\lambda / T = (2\\pi/k) / (2\\pi/\\omega) = \\omega / k \\)."},
{question:"Maximum amplitude (antinodes) of a standing wave occur at:", options:["\\( x = n\\frac{\\lambda}{2} \\)","\\( x = (2n + 1)\\frac{\\lambda}{4} \\)","\\( x = n\\lambda \\)","\\( x = \\lambda \\)"], correctIndex:1, feedback:"Antinodes occur where \\( \\sin(kx) = \\pm 1 \\), yielding \\( x = (2n + 1)\\frac{\\lambda}{4} \\)."},
{question:"What does the \\( \\pm \\) sign in \\( y = a \\sin(\\omega t \\pm kx) \\) determine?", options:["Amplitude","Wave speed","Direction of propagation","Frequency"], correctIndex:2, feedback:"A minus sign means it travels in the positive x direction, and a plus sign means negative x direction."},
{question:"In the wave equation, \\( \\lambda \\) stands for:", options:["Frequency","Period","Wave number","Wavelength"], correctIndex:3, feedback:"\\( \\lambda \\) represents the wavelength of the wave."},
{question:"The period \\( T \\) of a wave is related to angular frequency by:", options:["\\( T = \\frac{2\\pi}{\\omega} \\)","\\( T = 2\\pi \\omega \\)","\\( T = \\frac{\\omega}{2\\pi} \\)","\\( T = \\omega \\lambda \\)"], correctIndex:0, feedback:"By definition, \\( \\omega = 2\\pi/T \\Rightarrow T = 2\\pi/\\omega \\)."},
{question:"A standing wave is usually formed by the superposition of:", options:["Two waves of different frequencies","Two waves of same frequency traveling in same direction","Two waves of same frequency traveling in opposite directions","A single wave reflecting internally"], correctIndex:2, feedback:"Standing waves form from identical waves moving in opposite directions."}
]},
{id:"g12-l5",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Electric-generator-animation.gif",title:"Lesson 5: Magnetism & Induction",concepts:[],definitions:[],examples:[],
equations:[
{section:"Magnetic Field & Force",name:"Magnetic field (straight wire)",formula:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)",symbols:[{symbol:"B",desc:"Magnetic Field (T)"},{symbol:"μ_0",desc:"Permeability of free space (4π×10⁻⁷ T·m/A)"},{symbol:"I",desc:"Current (A)"},{symbol:"d",desc:"Distance from wire (m)"}]},
{section:"Magnetic Field & Force",name:"Magnetic field (circular wire)",formula:"\\( B = \\frac{\\mu_0 NI}{2R} \\)",symbols:[{symbol:"R",desc:"Radius of coil (m)"},{symbol:"N",desc:"Number of turns"}]},
{section:"Magnetic Field & Force",name:"Magnetic field (solenoid)",formula:"\\( B = \\frac{\\mu_0 NI}{l} \\)",symbols:[{symbol:"l",desc:"Length of solenoid (m)"}]},
{section:"Magnetic Field & Force",name:"Lorentz force",formula:"\\( F = |q|vB \\sin(v, B) \\)",symbols:[{symbol:"F",desc:"Magnetic Force (N)"},{symbol:"q",desc:"Electric Charge (C)"},{symbol:"v",desc:"Velocity (m/s)"}]},
{section:"Magnetic Field & Force",name:"Two parallel wires",formula:"\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\)",symbols:[{symbol:"I_1, I_2",desc:"Currents (A)"},{symbol:"a",desc:"Distance between wires (m)"},{symbol:"l",desc:"Length of wire (m)"}]},
{section:"Magnetic Field & Force",name:"Wire in magnetic field",formula:"\\( F = IBl \\sin(l, B) \\)",symbols:[{symbol:"F",desc:"Magnetic Force on wire (N)"}]},
{section:"Magnetic Field & Force",name:"Solenoid number of turns",formula:"\\( N = \\frac{l'}{\\pi D} \\)",symbols:[{symbol:"l'",desc:"Length of wire (m)"},{symbol:"D",desc:"Diameter of solenoid (m)"}]},
{section:"Cyclotron Path",name:"Cyclotron Radius",formula:"\\( R = \\frac{mv}{|q|B} \\)",symbols:[{symbol:"m",desc:"Mass of particle (kg)"}]},
{section:"Cyclotron Path",name:"Cyclotron Period",formula:"\\( T = \\frac{2\\pi m}{|q|B} \\)",symbols:[{symbol:"T",desc:"Period of revolution (s)"}]},
{section:"Induced EMF",name:"Magnetic flux",formula:"\\( \\Phi = NBA \\cos(\\vec{B}, \\vec{n}) \\)",symbols:[{symbol:"Φ",desc:"Magnetic Flux (Wb)"},{symbol:"A",desc:"Area (m²)"},{symbol:"n",desc:"Normal vector"}]},
{section:"Induced EMF",name:"Average Induce emf",formula:"\\( E = -\\frac{\\Delta \\Phi}{\\Delta t} \\)",symbols:[{symbol:"E",desc:"Average Induced emf (V)"}]},
{section:"Induced EMF",name:"Magnitude of Induce emf",formula:"\\( e = -\\frac{d\\Phi}{dt} \\)",symbols:[{symbol:"e",desc:"Instantaneous Induced emf (V)"}]},
{section:"Induced EMF",name:"Moving conductor",formula:"\\( E = vBl \\sin(v, B) \\)",symbols:[{symbol:"E",desc:"Induced emf (V)"}]},
{section:"Induced EMF",name:"Generator",formula:"\\( e = NBA\\omega \\sin(\\omega t) \\)",symbols:[{symbol:"ω",desc:"Angular velocity (rad/s)"}]},
{section:"Self Induction & RL Circuit",name:"Self induced emf",formula:"\\( E = -L \\frac{\\Delta I}{\\Delta t}, e = -L \\frac{dI}{dt} \\)",symbols:[{symbol:"L",desc:"Inductance (H)"}]},
{section:"Self Induction & RL Circuit",name:"RL Circuit Voltage Equation",formula:"\\( V_{AB} = Ri + L\\frac{di}{dt} \\)",symbols:[{symbol:"V_{AB}",desc:"Voltage across RL circuit (V)"},{symbol:"i",desc:"Instantaneous current (A)"}]},
{section:"Self Induction & RL Circuit",name:"Instantaneous current (closed)",formula:"\\( i = I_p \\left(1 - e^{-\\frac{t}{\\tau}}\\right) \\)",symbols:[{symbol:"I_p",desc:"Peak Current (A)"},{symbol:"τ",desc:"Time constant (s)"}]},
{section:"Self Induction & RL Circuit",name:"Instantaneous current (opened)",formula:"\\( i = I_p e^{-\\frac{t}{\\tau}} \\)",symbols:[{symbol:"τ",desc:"Time constant (L/R) (s)"}]},
{section:"LC Oscillation",name:"LC Oscillation Energy",formula:"\\( E_{CL} = E_C + E_L = \\frac{1}{2}CV^2 + \\frac{1}{2}Li^2 = \\text{const} \\)",symbols:[{symbol:"E_{CL}",desc:"Total Energy (J)"},{symbol:"C",desc:"Capacitance (F)"},{symbol:"V",desc:"Voltage (V)"}]},
{section:"LC Oscillation",name:"Angular frequency (LC)",formula:"\\( \\omega_0 = \\frac{1}{\\sqrt{CL}} \\)",symbols:[{symbol:"ω_0",desc:"Resonant Angular Frequency (rad/s)"}]}
],flashcards:[
{front:"What is the formula for the Lorentz force on a moving charge?", back:"\\( F = |q|vB \\sin(v, B) \\)"},
{front:"What is Faraday's law for the magnitude of induced emf?", back:"\\( e = -\\frac{d\\Phi}{dt} \\)"},
{front:"What is the formula for the magnetic field of a straight wire?", back:"\\( B = \\frac{\\mu_0 I}{2\\pi d} \\)"},
{front:"What is the force between two parallel current-carrying wires?", back:"\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\)"},
{front:"What is the formula for Cyclotron Radius?", back:"\\( R = \\frac{mv}{|q|B} \\)"},
{front:"What is the formula for Magnetic flux?", back:"\\( \\Phi = NBA \\cos(\\vec{B}, \\vec{n}) \\)"},
{front:"What is the induced emf in a moving conductor?", back:"\\( E = vBl \\sin(v, B) \\)"},
{front:"What is the self-induced emf in an inductor?", back:"\\( e = -L \\frac{dI}{dt} \\)"},
{front:"What is the RL Circuit Voltage Equation?", back:"\\( V_{AB} = Ri + L\\frac{di}{dt} \\)"},
{front:"What is the angular frequency of an LC Oscillation?", back:"\\( \\omega_0 = \\frac{1}{\\sqrt{CL}} \\)"}
],quiz:[
{question:"What is the magnetic field at the center of a circular wire with \\(N\\) turns?", options:["\\( B = \\frac{\\mu_0 I}{2\\pi R} \\)","\\( B = \\frac{\\mu_0 NI}{2R} \\)","\\( B = \\frac{\\mu_0 NI}{l} \\)","\\( B = \\mu_0 NI \\)"], correctIndex:1, feedback:"For a circular wire or coil, \\( B = \\frac{\\mu_0 NI}{2R} \\)."},
{question:"What happens to the total energy in an ideal LC oscillation?", options:["It decays exponentially","It alternates between positive and negative","It remains constant (\\( E_C + E_L = \\text{const} \\))","It increases continuously"], correctIndex:2, feedback:"In an ideal LC circuit, energy oscillates between the capacitor and inductor but the total is constant."},
{question:"The Lorentz force on a moving charge is:", options:["\\( F = qE \\)","\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\)","\\( F = |q|vB \\sin(v, B) \\)","\\( F = IBl \\sin(l, B) \\)"], correctIndex:2, feedback:"The magnetic Lorentz force depends on charge, velocity, magnetic field, and the angle between \\(v\\) and \\(B\\)."},
{question:"In a cyclotron, the radius of the particle's path is proportional to:", options:["Its charge","The magnetic field","Its mass and velocity","Its acceleration"], correctIndex:2, feedback:"\\( R = \\frac{mv}{|q|B} \\), so it is directly proportional to mass \\(m\\) and velocity \\(v\\)."},
{question:"Magnetic flux \\(\\Phi\\) is maximized when the angle between the normal vector \\(\\vec{n}\\) and magnetic field \\(\\vec{B}\\) is:", options:["0°","45°","90°","180°"], correctIndex:0, feedback:"Cosine is maximum (1) when the angle is 0° (meaning the field is perpendicular to the surface area)."},
{question:"The self-induced emf in an inductor is proportional to:", options:["The current \\(I\\)","The voltage \\(V\\)","The rate of change of current \\(dI/dt\\)","The resistance \\(R\\)"], correctIndex:2, feedback:"\\( e = -L \\frac{dI}{dt} \\)."},
{question:"Which formula gives the induced emf in a straight moving conductor?", options:["\\( E = -\\frac{\\Delta \\Phi}{\\Delta t} \\)","\\( E = vBl \\sin(v, B) \\)","\\( E = NBA\\omega \\sin(\\omega t) \\)","\\( E = -L \\frac{\\Delta I}{\\Delta t} \\)"], correctIndex:1, feedback:"For a moving rod/conductor of length \\(l\\), \\( E = vBl \\sin(v, B) \\)."},
{question:"In an RL circuit with a switch that just closed, the current:", options:["Drops to zero immediately","Increases exponentially to a maximum","Is constant","Oscillates indefinitely"], correctIndex:1, feedback:"Current builds up exponentially according to \\( i = I_p (1 - e^{-t/\\tau}) \\)."},
{question:"The resonant angular frequency of an LC circuit is:", options:["\\( \\sqrt{CL} \\)","\\( \\frac{1}{CL} \\)","\\( \\frac{1}{\\sqrt{CL}} \\)","\\( \\frac{C}{L} \\)"], correctIndex:2, feedback:"The frequency is given by \\( \\omega_0 = \\frac{1}{\\sqrt{CL}} \\)."},
{question:"The force between two parallel current-carrying wires depends inversely on:", options:["The length of the wires","The currents \\(I_1\\) and \\(I_2\\)","The permeability \\(\\mu_0\\)","The distance between them \\(a\\)"], correctIndex:3, feedback:"\\( F = \\frac{\\mu_0 I_1 I_2 l}{2\\pi a} \\), so it is inversely proportional to distance \\(a\\)."}
]},
{id:"g12-l6",gifUrl:"https://commons.wikimedia.org/wiki/Special:FilePath/Alternating_current_ani.gif",title:"Lesson 6: Alternating Current",concepts:[],definitions:[],examples:[],
equations:[
{section:"AC Basics",name:"Instantaneous current",formula:"\\( i = i_m \\sin(\\omega t + \\phi_0) \\)",symbols:[{symbol:"i",desc:"Instantaneous current (A)"},{symbol:"i_m",desc:"Peak current (A)"},{symbol:"\\phi_0",desc:"Initial phase angle (rad)"}]},
{section:"AC Basics",name:"RMS Current",formula:"\\( I = \\frac{I_m}{\\sqrt{2}} \\)",symbols:[{symbol:"I",desc:"Root Mean Square Current (A)"}]},
{section:"AC Basics",name:"RMS Voltage",formula:"\\( V = \\frac{V_m}{\\sqrt{2}} \\)",symbols:[{symbol:"V",desc:"Root Mean Square Voltage (V)"},{symbol:"V_m",desc:"Peak voltage (V)"}]},
{section:"AC Basics",name:"Ohm's law",formula:"\\( I = \\frac{V}{Z}, I_m = \\frac{V_m}{Z} \\)",symbols:[{symbol:"Z",desc:"Impedance (Ω)"}]},
{section:"RLC Series Circuit",name:"RLC Maximum voltage",formula:"\\( V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2} \\)",symbols:[{symbol:"V_{Rm}, V_{Lm}, V_{Cm}",desc:"Peak voltage across R, L, C (V)"}]},
{section:"RLC Series Circuit",name:"RLC RMS voltage",formula:"\\( V = \\sqrt{V_R^2 + (V_L - V_C)^2} \\)",symbols:[{symbol:"V_R, V_L, V_C",desc:"RMS voltage across R, L, C (V)"}]},
{section:"RLC Series Circuit",name:"Impedance Z",formula:"\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} = \\sqrt{R^2 + \\left(L\\omega - \\frac{1}{C\\omega}\\right)^2} \\)",symbols:[{symbol:"R",desc:"Resistance (Ω)"},{symbol:"L",desc:"Inductance (H)"},{symbol:"C",desc:"Capacitance (F)"}]},
{section:"RLC Series Circuit",name:"Phase Angle",formula:"\\( \\tan \\phi = \\frac{Z_L - Z_C}{R} \\)",symbols:[{symbol:"\\phi",desc:"Phase angle between voltage & current (rad)"},{symbol:"Z_L",desc:"Inductive Reactance (Ω)"},{symbol:"Z_C",desc:"Capacitive Reactance (Ω)"}]},
{section:"RLC Series Circuit",name:"Power",formula:"\\( P = VI \\cos \\phi \\)",symbols:[{symbol:"P",desc:"Average Power (W)"},{symbol:"\\cos \\phi",desc:"Power factor (No unit)"}]},
{section:"Transformers",name:"Transformers Turn ratio",formula:"\\( K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} \\)",symbols:[{symbol:"K",desc:"Transformer Turn Ratio (No unit)"},{symbol:"V_1, V_2",desc:"Primary/Secondary Voltage (V)"},{symbol:"n_1, n_2",desc:"Primary/Secondary Turns"}]}
],flashcards:[
{front:"What is the formula for instantaneous current?", back:"\\( i = i_m \\sin(\\omega t + \\phi_0) \\)"},
{front:"What is the formula for RMS Current?", back:"\\( I = \\frac{I_m}{\\sqrt{2}} \\)"},
{front:"What is the formula for RMS Voltage?", back:"\\( V = \\frac{V_m}{\\sqrt{2}} \\)"},
{front:"What is Ohm's law for AC circuits?", back:"\\( I = \\frac{V}{Z} \\)"},
{front:"What is the RLC Maximum voltage formula?", back:"\\( V_m = \\sqrt{V_{Rm}^2 + (V_{Lm} - V_{Cm})^2} \\)"},
{front:"What is the RLC RMS voltage formula?", back:"\\( V = \\sqrt{V_R^2 + (V_L - V_C)^2} \\)"},
{front:"What is the formula for Impedance \\( Z \\)?", back:"\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\)"},
{front:"What is the formula for the Phase Angle?", back:"\\( \\tan \\phi = \\frac{Z_L - Z_C}{R} \\)"},
{front:"What is the average Power in an RLC circuit?", back:"\\( P = VI \\cos \\phi \\)"},
{front:"What is the formula for the Transformer Turn Ratio \\(K\\)?", back:"\\( K = \\frac{V_2}{V_1} = \\frac{n_2}{n_1} \\)"}
],quiz:[
{question:"In an RLC series circuit, what is the formula for Impedance (\\(Z\\))?", options:["\\( Z = R + Z_L + Z_C \\)","\\( Z = \\sqrt{R^2 + (Z_L - Z_C)^2} \\)","\\( Z = \\sqrt{R^2 + (Z_L + Z_C)^2} \\)","\\( Z = R^2 + L^2 + C^2 \\)"], correctIndex:1, feedback:"Impedance is calculated as \\( \\sqrt{R^2 + (Z_L - Z_C)^2} \\)."},
{question:"What does the phase angle \\(\\phi\\) represent in an AC circuit?", options:["Angle between voltage and current","Phase of the peak current only","Angular frequency of the circuit","Transformer turn ratio"], correctIndex:0, feedback:"The phase angle \\(\\phi\\) describes the phase difference between the voltage and the current."},
{question:"The RMS voltage is related to peak voltage by:", options:["\\( V = V_m / 2 \\)","\\( V = V_m / \\sqrt{2} \\)","\\( V = V_m \\times \\sqrt{2} \\)","\\( V = V_m \\)"], correctIndex:1, feedback:"RMS values are peak values divided by \\( \\sqrt{2} \\)."},
{question:"Ohm's Law for an AC circuit is written as:", options:["\\( I = V / R \\)","\\( I = V / Z \\)","\\( I = V \\times Z \\)","\\( I = V - Z \\)"], correctIndex:1, feedback:"In AC circuits, resistance \\( R \\) is replaced by total impedance \\( Z \\)."},
{question:"In the power formula \\( P = VI \\cos \\phi \\), the term \\( \\cos \\phi \\) is called:", options:["Power factor","Impedance factor","Phase factor","Loss factor"], correctIndex:0, feedback:"It indicates how much of the apparent power is actually used (average power)."},
{question:"Inductive reactance \\( Z_L \\) is given by:", options:["\\( 1 / L\\omega \\)","\\( L\\omega \\)","\\( L / \\omega \\)","\\( \\omega / L \\)"], correctIndex:1, feedback:"\\( Z_L = L\\omega \\)."},
{question:"Capacitive reactance \\( Z_C \\) is given by:", options:["\\( 1 / C\\omega \\)","\\( C\\omega \\)","\\( C / \\omega \\)","\\( \\omega / C \\)"], correctIndex:0, feedback:"\\( Z_C = 1 / C\\omega \\)."},
{question:"For an ideal transformer, the turn ratio \\( K \\) equals:", options:["\\( n_1 / n_2 \\)","\\( n_2 / n_1 \\)","\\( V_1 / V_2 \\)","\\( I_2 / I_1 \\)"], correctIndex:1, feedback:"The ratio is secondary turns over primary turns, \\( n_2 / n_1 \\)."},
{question:"At resonance in an RLC circuit (where \\( Z_L = Z_C \\)), the impedance \\( Z \\) is:", options:["Zero","Infinite","Equal to the resistance \\( R \\)","\\( R^2 \\)"], correctIndex:2, feedback:"When \\( Z_L = Z_C \\), the reactive parts cancel, leaving \\( Z = \\sqrt{R^2 + 0} = R \\)."},
{question:"The instantaneous current is \\( i = i_m \\sin(\\omega t + \\phi_0) \\). What is \\( i_m \\)?", options:["RMS current","Average current","Peak current","Initial current"], correctIndex:2, feedback:"\\( i_m \\) is the maximum or peak amplitude of the current."}
]}
]
};

// --- App State ---
let currentGrade = null;
let currentLesson = null;
let currentFlashcardIndex = 0;
let currentQuizIndex = 0;
let quizScore = 0;

// --- DOM Elements ---
const viewDashboard = document.getElementById('view-dashboard');
const viewLessons = document.getElementById('view-lessons');
const viewLessonDetail = document.getElementById('view-lesson-detail');
const homeBtn = document.getElementById('home-btn');
const backToLessonsBtn = document.getElementById('back-to-lessons-btn');

// --- Navigation ---
function showView(viewElement) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active', 'hidden'));
    document.querySelectorAll('.view').forEach(el => {
        if(el !== viewElement) el.classList.add('hidden');
    });
    viewElement.classList.add('active');
    window.scrollTo(0, 0);
}

homeBtn.addEventListener('click', () => showView(viewDashboard));
backToLessonsBtn.addEventListener('click', () => showView(viewLessons));

// --- Grade Selection ---
document.querySelectorAll('.grade-card').forEach(card => {
    card.addEventListener('click', () => loadLessons(card.getAttribute('data-grade')));
});

function loadLessons(grade) {
    currentGrade = grade;
    document.getElementById('lessons-title').innerText = `Grade ${grade} Physics`;
    const container = document.getElementById('lesson-list-container');
    container.innerHTML = '';
    
    if (data[grade]) {
        data[grade].forEach(lesson => {
            const card = document.createElement('div');
            card.className = 'lesson-card';
            card.innerHTML = `
                <h3>${lesson.title}</h3>
                <p>${lesson.equations.length} Equations</p>
                <div class="card-footer">
                    <span>Start Lesson</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            `;
            card.addEventListener('click', () => loadLessonDetail(lesson));
            container.appendChild(card);
        });
    }
    showView(viewLessons);
}

// --- Lesson Detail ---
function loadLessonDetail(lesson) {
    currentLesson = lesson;
    document.getElementById('lesson-detail-title').innerText = lesson.title;
    document.querySelector('.tab-btn[data-target="equations"]').click();
    
    const conceptsList = document.getElementById('lesson-concepts');
    conceptsList.innerHTML = (lesson.concepts || []).map(c => `<li>${c}</li>`).join('');
    
    const definitionsGrid = document.getElementById('lesson-definitions');
    definitionsGrid.innerHTML = (lesson.definitions || []).map(d => `
        <div class="definition-card"><h4>${d.term}</h4><p>${d.desc || ''}</p></div>
    `).join('');
    
    const examplesContainer = document.getElementById('lesson-examples');
    examplesContainer.innerHTML = (lesson.examples || []).map(e => `
        <div class="example"><h4>${e.title}</h4><p>${e.desc || e.content || ''}</p></div>
    `).join('');
    
    if(lesson.gifUrl) {
        document.getElementById('lesson-animation-section').style.display = 'block';
        document.getElementById('lesson-gif').src = lesson.gifUrl;
    } else {
        document.getElementById('lesson-animation-section').style.display = 'none';
        document.getElementById('lesson-gif').src = '';
    }
    
    if((lesson.concepts || []).length === 0 && (lesson.definitions || []).length === 0 && !lesson.gifUrl) {
        document.querySelector('.tab-btn[data-target="summary"]').classList.add('hidden');
    } else {
        document.querySelector('.tab-btn[data-target="summary"]').classList.remove('hidden');
    }

    const equationsGrid = document.getElementById('lesson-equations');
    let eqHTML = '';
    let currentSection = '';
    
    (lesson.equations || []).forEach(eq => {
        if (eq.section && eq.section !== currentSection) {
            currentSection = eq.section;
            eqHTML += `<div class="equation-section-title" style="grid-column: 1 / -1; margin-top: 2rem; margin-bottom: 0.5rem; border-bottom: 2px solid var(--cyan); padding-bottom: 0.5rem;"><h2 style="color: var(--primary-blue); font-size: 1.5rem;"><i class="fa-solid fa-layer-group"></i> ${currentSection}</h2></div>`;
        }
        
        eqHTML += `
        <div class="equation-card">
            <div class="eq-name">${eq.name}</div>
            <div class="eq-formula">${eq.formula}</div>
            <div class="eq-symbols">
                <p style="margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.85rem;">${eq.symbols && eq.symbols.length > 0 ? "Symbols breakdown & SI Units:" : ""}</p>
                <ul>
                    ${(eq.symbols || []).map(s => {
                        let desc = s.desc;
                        let match = desc.match(/ \(([^)]+)\)$/);
                        if (match) {
                            let unitStr = match[1];
                            if (unitStr !== "No unit") {
                                unitStr = unitStr.replace(/m³/g, 'm^3')
                                                 .replace(/m²/g, 'm^2')
                                                 .replace(/⁻⁷/g, '^{-7}')
                                                 .replace(/·/g, '\\cdot ')
                                                 .replace(/π/g, '\\pi ')
                                                 .replace(/×/g, '\\times ');
                                desc = desc.substring(0, match.index) + ` (\\(\\mathrm{${unitStr}}\\))`;
                            }
                        }
                        // Also ensure symbol has MathJax formatting
                        // Replace some greek letters if they were written as unicode
                        let sym = s.symbol.replace(/μ_0/g, '\\mu_0')
                                          .replace(/θ_c/g, '\\theta_c')
                                          .replace(/θ/g, '\\theta')
                                          .replace(/α/g, '\\alpha')
                                          .replace(/φ_0/g, '\\phi_0')
                                          .replace(/φ/g, '\\phi');
                        return `<li><strong>\\( ${sym} \\)</strong> : ${desc}</li>`;
                    }).join('')}
                </ul>
            </div>
        </div>
        `;
    });
    equationsGrid.innerHTML = eqHTML;
    
    document.querySelectorAll('.equation-card').forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('expanded'));
    });
    
    if(window.MathJax) MathJax.typesetPromise();

    currentFlashcardIndex = 0;
    if(lesson.flashcards && lesson.flashcards.length > 0) {
        document.getElementById('tab-flashcards').classList.remove('hidden');
        document.querySelector('.tab-btn[data-target="flashcards"]').classList.remove('hidden');
        updateFlashcard();
    } else {
        document.querySelector('.tab-btn[data-target="flashcards"]').classList.add('hidden');
    }
    
    initQuiz();
    showView(viewLessonDetail);
}

// --- Tabs Logic ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => {
            p.classList.add('hidden');
            p.classList.remove('active');
        });
        btn.classList.add('active');
        const target = document.getElementById(`tab-${btn.getAttribute('data-target')}`);
        if(target) {
            target.classList.remove('hidden');
            target.classList.add('active');
        }
    });
});

// --- Flashcards Logic ---
const fcCard = document.getElementById('active-flashcard');
const fcFrontText = document.getElementById('fc-front-text');
const fcBackText = document.getElementById('fc-back-text');
const fcCounter = document.getElementById('fc-counter');

function updateFlashcard() {
    if (!currentLesson || !currentLesson.flashcards || !currentLesson.flashcards.length) return;
    fcCard.classList.remove('flipped');
    setTimeout(() => {
        const fc = currentLesson.flashcards[currentFlashcardIndex];
        fcFrontText.innerText = fc.front;
        fcBackText.innerHTML = fc.back;
        fcCounter.innerText = `${currentFlashcardIndex + 1} / ${currentLesson.flashcards.length}`;
        if(window.MathJax) MathJax.typesetPromise();
    }, 150);
}

document.getElementById('fc-flip-btn').addEventListener('click', () => fcCard.classList.toggle('flipped'));
fcCard.addEventListener('click', () => fcCard.classList.toggle('flipped'));
document.getElementById('fc-prev').addEventListener('click', () => { if (currentFlashcardIndex > 0) { currentFlashcardIndex--; updateFlashcard(); }});
document.getElementById('fc-next').addEventListener('click', () => { if (currentFlashcardIndex < currentLesson.flashcards.length - 1) { currentFlashcardIndex++; updateFlashcard(); }});

// --- Quiz Logic ---
function initQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    if(!currentLesson.quiz || currentLesson.quiz.length === 0) {
        document.querySelector('.tab-btn[data-target="quiz"]').classList.add('hidden');
        return;
    }
    document.querySelector('.tab-btn[data-target="quiz"]').classList.remove('hidden');
    document.getElementById('quiz-question-container').classList.remove('hidden');
    document.getElementById('quiz-results-container').classList.add('hidden');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const q = currentLesson.quiz[currentQuizIndex];
    document.getElementById('quiz-progress-text').innerText = `Question ${currentQuizIndex + 1} of ${currentLesson.quiz.length}`;
    document.getElementById('quiz-question-text').innerHTML = q.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.classList.add('hidden');
    feedbackEl.className = 'quiz-feedback hidden';
    document.getElementById('quiz-next-btn').classList.add('hidden');
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerHTML = opt;
        btn.addEventListener('click', () => handleQuizAnswer(idx, btn));
        optionsContainer.appendChild(btn);
    });
    if(window.MathJax) MathJax.typesetPromise();
}

function handleQuizAnswer(selectedIndex, btnElement) {
    const q = currentLesson.quiz[currentQuizIndex];
    const optionsContainer = document.getElementById('quiz-options');
    Array.from(optionsContainer.children).forEach((child, idx) => {
        child.disabled = true;
        if (idx === q.correctIndex) child.classList.add('correct');
        else if (idx === selectedIndex) child.classList.add('wrong');
    });
    const feedbackEl = document.getElementById('quiz-feedback');
    feedbackEl.classList.remove('hidden');
    feedbackEl.innerHTML = q.feedback;
    if (selectedIndex === q.correctIndex) {
        quizScore++;
        feedbackEl.classList.add('correct-feedback');
    } else {
        feedbackEl.classList.add('wrong-feedback');
    }
    document.getElementById('quiz-next-btn').classList.remove('hidden');
    if(window.MathJax) MathJax.typesetPromise();
}

document.getElementById('quiz-next-btn').addEventListener('click', () => {
    currentQuizIndex++;
    if (currentQuizIndex < currentLesson.quiz.length) loadQuizQuestion();
    else showQuizResults();
});

function showQuizResults() {
    document.getElementById('quiz-question-container').classList.add('hidden');
    const resultsContainer = document.getElementById('quiz-results-container');
    resultsContainer.classList.remove('hidden');
    document.getElementById('quiz-score').innerText = quizScore;
    document.getElementById('quiz-total').innerText = currentLesson.quiz.length;
    const percentage = (quizScore / currentLesson.quiz.length) * 100;
    const msgEl = document.getElementById('quiz-result-message');
    if (percentage === 100) msgEl.innerText = "Excellent! You mastered this topic.";
    else if (percentage >= 50) msgEl.innerText = "Good job! Keep practicing to get a perfect score.";
    else msgEl.innerText = "You might want to review the summary and flashcards before trying again.";
}

document.getElementById('quiz-retry-btn').addEventListener('click', initQuiz);

window.addEventListener('scroll', () => {
    if (viewLessonDetail.classList.contains('active')) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('reading-progress').style.width = height <= 0 ? "100%" : scrolled + "%";
    }
});
