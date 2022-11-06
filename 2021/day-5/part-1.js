const fs = require('fs');
const util = require('util');

const fileRead = fs.readFileSync(__dirname + '/input.txt').toString().trim();

const pipelineCoordinates = fileRead
  .split('\n')
  .map((plot) =>
    plot
      .split(' -> ')
      .map((coordinates) =>
        coordinates.split(',').map((point) => Number(point))
      )
  );

// console.log(util.inspect(pipelineCoordinates, false, null, true));

	const pointsMap = [];

	for (let pipe of pipelineCoordinates) {
		const [start, end] = pipe;
		const [startX, startY] = start;
		const [endX, endY] = end;

		if (startX === endX) {
			const yMin = Math.min(startY, endY);
			const yMax = Math.max(startY, endY);

			for (let y = yMin; y <= yMax; y++) {
				pointsMap;
			}
		}
	}

	console.log(pointsMap);
