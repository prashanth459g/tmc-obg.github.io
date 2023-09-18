---
Aliases: 
banner: ""
banner_y: 0.744
banner _x: 0.5
---
### Index
- Previous chapter -->
- Next Chapter[^1] -->
- Sources -
	- [Artificial Intelligence (AI) in Cardiotocography (CTG) Interpretation](https://clinicaltrials.gov/ct2/show/NCT04584281)
	- 
- 
# OxAi

The project aims to create a clinical decision support (CDS) system by programming a self-learning software to analyze the cardiotocography (CTG) traces by collecting data from labor room of SAT hospital. The project will process and analyze all clinical outcomes of the estimated ~1000 eligible patient records. 
We will design, develop, and validate several AI architectures with the intent to create the CDS system. The AI would learn to assist on this task by training machine learning (ML) algorithms. The main purpose of the AI-CDS will be to have safe motherhood & labor, and to determine the best fetal extraction moment during labor, based on a self-learning approach, as a "superhuman" support tool for obstetricians in decision-making during labor.

### YIP
Group name - OxAI
Key - satobg

- Explain the problem statement in one line
	- injudicious use of Oxytocin infusion leads to increased complications from increased fetal distress/CS rate to fetal death/maternal death(uterine rupture)
- Please give us a detailed background of the problem
	- The amount of oxytocin requirement is different for each subset of the group, depending on parity(multipara needs lesser dose), Comorbidities, age, BMI, and present condition(amount of uterine contractions & Fetal heart rate) of the women in labor 
	- But in today's clinical practice, we titer the oxytocin manually with a fixed scale of oxytocin for every patient, there is no individualized plan for anyone, so it results in more preventable adverse effects like MSAF, fetal distress, IUD amniotic fluid embolism, uterine tachysystole, uterine rupture and maternal collapse
- Please explain who is affected by the problem(Maximum 100 words)
	- Mothers who are in the active phase of labor.
- Explain the root cause of the problem(Maximum 100 words)
	- In an evidence based Medicine era, we still use a standard (safety) protocol without personalizing for each patient. By generalizing, we fail to provide safe labor irrespective of the current condition of the mother and baby.
	- But each patient is different, each needs to be personalized plan for augmentation of labor.
- Are there existing solutions? If so, what are the limitations?
	- Infusion pumps do give a fixed amount of infusion.
	- Limitation - Not individualized to each patient. We have to adjust the infusion rate manually - which delivers a fixed amount of drug irrespective present condition of the patient.
- What is the expected outcome when your idea is implemented?
	- This can reduce the maternal mortality rate, and decrease maternal and fetal morbidity in general by early detection of the complications 
- Please give a title to your Idea which will solve the problem ( 10 words)
	- OxAi - Data-driven Oxytocin infusion kit for safe labour
- Why do you want to solve this problem? (Maximum 100 words)
	- We saw a case of uterine rupture in our hospital referred from outside, probably due to excessive usage of oxytocin in labour, the patient was taken for emergency OT and her uterus was removed, 18 units of blood were given on the table, and she went into cardiac arrest 3 times on the OT table. using drugs ineffectively can be life-threatening, so I want the data to help us make clinical decisions
- Explain your idea in a paragraph ( 100 words) *
	- We aim to create a clinical decision support (CDS) system, creating a kit for an oxytocin infusion pump for women in labour.
	- simply put it will have -> input-processor-output
		- Input: CTG machine which collects the data, like uterine contraction(strength & frequency) and fetal heart rate (BFHR, BTBV, Accelerations, decelerations)
		- Output: Oxytocin infusion pump, which controls the amount of drug administered based on the processor output signal
		- Processor: we will make hardware(Raspberry Pi), which takes the data entered for each patient, signal from input, recognises the pattern of signal, sends a calculated output signal
- What is the advantage of the Idea which you are proposing? (Maximum 100 words)
	- We hope to create clinical decision support (CDS) system, which will enable us in many ways
		- safe labour: safe motherhood
		- no need to manually adjust drug dosage
		- it can be scaled up to use for other patients(for example - adrenaline infusion in shock patients, NTG infusion in hypertensive crisis)
		- oxytocin has a 50sec half-life: loop validation between output and input will have high accuracy, low latency
- Estimated Solution time for implementing the Idea?
	- 24 to 36 months
- Estimated cost of the Idea Project?
	- Infusion pump(1,00,000) x 4
	- CTG machine(3,00,000) x 4
	- Raspberry Pi and other hardware to process signals (1,00,000) x 4
	- data collection phase - interns(20,000x3peoplex3months) - 1,20,000
	- Consultants fee for
		- signal processing ~5,00,000
		- building data modules ~5,00,000
		- building hardware(processor, tweaking CTG machine and Infusion pumps) and output monitoring ~5,00,000
	- digital platforms to enter data into hardware(interface), analyzing outcome and to produce reports ~10,00,000
	- operational cost ~4,00,000
	- Total - 50,00,000
Mentor - Dr Jayasree


- [ ] Ethical 
	- [ ] Document and protocol
	- [ ] 

- [ ] clinical trail register
	- [ ] registration and number


- [ ] 


#
[^1]: Next Chapter is 