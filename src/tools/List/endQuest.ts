export const endQuest = (e: string) => {
	const id = e;
	const objectQuest: { id: string; done: boolean } = {
		id,
		done: true,
	};
	return objectQuest;
};
