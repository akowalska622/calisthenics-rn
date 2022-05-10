const EXERCISES_ENUM = {
	pull_up: 'Pull up',
	push_up: 'Push up',
	squats: 'Squats',
	abs: 'ABS',
	bridge: 'Bridge',
};

export const EXERCISES = [
	{
		id: 'e1',
		name: EXERCISES_ENUM.pull_up,
	},
	{
		id: 'e2',
		name: EXERCISES_ENUM.push_up,
	},
	{
		id: 'e3',
		name: EXERCISES_ENUM.squats,
	},
	{
		id: 'e4',
		name: EXERCISES_ENUM.abs,
	},
	{
		id: 'e5',
		name: EXERCISES_ENUM.bridge,
	},
];

const push_ups = [
	{
		id: 's1',
		name: 'Against the wall',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 25,
		},
		advanced: {
			series: 3,
			reps: 50,
		},
	},
	{
		id: 's2',
		name: 'Inclined push-up',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 25,
		},
		advanced: {
			series: 3,
			reps: 40,
		},
	},
	{
		id: 's3',
		name: 'Knee push-up',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 15,
		},
		advanced: {
			series: 3,
			reps: 30,
		},
	},
	{
		id: 's4',
		name: 'Half push-ups',
		beginner: {
			series: 1,
			reps: 8,
		},
		intermediate: {
			series: 2,
			reps: 12,
		},
		advanced: {
			series: 2,
			reps: 25,
		},
	},
	{
		id: 's5',
		name: 'Full push-ups',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's6',
		name: 'Narrow push-ups',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's7',
		name: 'Unequal push-ups',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's8',
		name: 'Half push-ups one hand',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's9',
		name: 'Push-ups with a lever',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's10',
		name: 'Push-ups one hand',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 1,
			reps: 100,
		},
	},
];

const squats = [
	{
		id: 's11',
		name: 'Squats on shoulders',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 25,
		},
		advanced: {
			series: 3,
			reps: 50,
		},
	},
	{
		id: 's12',
		name: 'Scissors squats',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 20,
		},
		advanced: {
			series: 3,
			reps: 40,
		},
	},
	{
		id: 's13',
		name: 'Assisted squats',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 15,
		},
		advanced: {
			series: 3,
			reps: 30,
		},
	},
	{
		id: 's14',
		name: 'Half squats',
		beginner: {
			series: 1,
			reps: 8,
		},
		intermediate: {
			series: 2,
			reps: 35,
		},
		advanced: {
			series: 2,
			reps: 50,
		},
	},
	{
		id: 's15',
		name: 'Full squats',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 30,
		},
	},
	{
		id: 's16',
		name: 'Narrow squats',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's17',
		name: 'Unequal squats',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's18',
		name: 'Half squats one-leg',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's19',
		name: 'Assisted one-leg squats',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's20',
		name: 'One-leg squats',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 50,
		},
	},
];

const pull_ups = [
	{
		id: 's21',
		name: 'Wall pull-up',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 20,
		},
		advanced: {
			series: 3,
			reps: 40,
		},
	},
	{
		id: 's22',
		name: 'Australian pull-up',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 20,
		},
		advanced: {
			series: 3,
			reps: 30,
		},
	},
	{
		id: 's23',
		name: 'Scissors pull-up',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 15,
		},
		advanced: {
			series: 3,
			reps: 20,
		},
	},
	{
		id: 's24',
		name: 'Half pull-ups',
		beginner: {
			series: 1,
			reps: 8,
		},
		intermediate: {
			series: 2,
			reps: 11,
		},
		advanced: {
			series: 2,
			reps: 15,
		},
	},
	{
		id: 's25',
		name: 'Full pull-ups',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 8,
		},
		advanced: {
			series: 2,
			reps: 10,
		},
	},
	{
		id: 's26',
		name: 'Narrow pull-ups',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 8,
		},
		advanced: {
			series: 2,
			reps: 10,
		},
	},
	{
		id: 's27',
		name: 'Unequal pull-ups',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 7,
		},
		advanced: {
			series: 2,
			reps: 9,
		},
	},
	{
		id: 's28',
		name: 'Half pull-ups one hand',
		beginner: {
			series: 1,
			reps: 4,
		},
		intermediate: {
			series: 2,
			reps: 6,
		},
		advanced: {
			series: 2,
			reps: 8,
		},
	},
	{
		id: 's29',
		name: 'Pull-ups with a lever',
		beginner: {
			series: 1,
			reps: 3,
		},
		intermediate: {
			series: 2,
			reps: 5,
		},
		advanced: {
			series: 2,
			reps: 7,
		},
	},
	{
		id: 's30',
		name: 'One hand pull-up',
		beginner: {
			series: 1,
			reps: 1,
		},
		intermediate: {
			series: 2,
			reps: 2,
		},
		advanced: {
			series: 2,
			reps: 6,
		},
	},
];

const abs = [
	{
		id: 's31',
		name: 'Knee roll up',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 25,
		},
		advanced: {
			series: 3,
			reps: 40,
		},
	},
	{
		id: 's32',
		name: 'Knee raises laying',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 20,
		},
		advanced: {
			series: 3,
			reps: 25,
		},
	},
	{
		id: 's33',
		name: 'Bended legs raises laying',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 15,
		},
		advanced: {
			series: 3,
			reps: 30,
		},
	},
	{
		id: 's34',
		name: '"Frogs" laying',
		beginner: {
			series: 1,
			reps: 8,
		},
		intermediate: {
			series: 2,
			reps: 12,
		},
		advanced: {
			series: 3,
			reps: 25,
		},
	},
	{
		id: 's35',
		name: 'Straight legs raises laying',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's36',
		name: 'Knee raises',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 15,
		},
	},
	{
		id: 's37',
		name: 'Bended legs raises',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 15,
		},
	},
	{
		id: 's38',
		name: '"Frogs"',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 15,
		},
	},
	{
		id: 's39',
		name: 'Half legs raises',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 15,
		},
	},
	{
		id: 's40',
		name: 'Legs raises',
		beginner: {
			series: 1,
			reps: 5,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 30,
		},
	},
];

const bridge = [
	{
		id: 's41',
		name: 'Short bridge',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 25,
		},
		advanced: {
			series: 3,
			reps: 50,
		},
	},
	{
		id: 's42',
		name: 'Straight bridge',
		beginner: {
			series: 1,
			reps: 10,
		},
		intermediate: {
			series: 2,
			reps: 20,
		},
		advanced: {
			series: 3,
			reps: 40,
		},
	},
	{
		id: 's43',
		name: 'Bended bridge',
		beginner: {
			series: 1,
			reps: 8,
		},
		intermediate: {
			series: 2,
			reps: 15,
		},
		advanced: {
			series: 3,
			reps: 30,
		},
	},
	{
		id: 's44',
		name: 'Bridge on head',
		beginner: {
			series: 1,
			reps: 8,
		},
		intermediate: {
			series: 2,
			reps: 15,
		},
		advanced: {
			series: 3,
			reps: 25,
		},
	},
	{
		id: 's45',
		name: 'Half bridge',
		beginner: {
			series: 1,
			reps: 8,
		},
		intermediate: {
			series: 2,
			reps: 15,
		},
		advanced: {
			series: 2,
			reps: 20,
		},
	},
	{
		id: 's46',
		name: 'Full bridge',
		beginner: {
			series: 1,
			reps: 6,
		},
		intermediate: {
			series: 2,
			reps: 10,
		},
		advanced: {
			series: 2,
			reps: 15,
		},
	},
	{
		id: 's47',
		name: 'Down the wall',
		beginner: {
			series: 1,
			reps: 3,
		},
		intermediate: {
			series: 2,
			reps: 6,
		},
		advanced: {
			series: 2,
			reps: 10,
		},
	},
	{
		id: 's48',
		name: 'Up the wall',
		beginner: {
			series: 1,
			reps: 2,
		},
		intermediate: {
			series: 2,
			reps: 4,
		},
		advanced: {
			series: 2,
			reps: 8,
		},
	},
	{
		id: 's49',
		name: 'Lowering the bridge',
		beginner: {
			series: 1,
			reps: 1,
		},
		intermediate: {
			series: 2,
			reps: 3,
		},
		advanced: {
			series: 2,
			reps: 6,
		},
	},
	{
		id: 's50',
		name: 'Raising the bridge',
		beginner: {
			series: 1,
			reps: 1,
		},
		intermediate: {
			series: 2,
			reps: 3,
		},
		advanced: {
			series: 2,
			reps: 15,
		},
	},
];

export const STEPS = {
	[EXERCISES.pull_up]: pull_ups,
	[EXERCISES.push_up]: push_ups,
	[EXERCISES.squats]: squats,
	[EXERCISES.abs]: abs,
	[EXERCISES.bridge]: bridge,
};
