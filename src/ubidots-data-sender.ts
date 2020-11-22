import https from "https";

export async function sendModbusDataToUbidots(modbusPayload: {
  [key: string]: number;
}): Promise<void> {
  const postData = JSON.stringify(modbusPayload);

  const options: { [key: string]: any } = {
    method: "POST",
    hostname: "industrial.api.ubidots.com",
    path: `/api/v1.6/devices/${process.env.DEVICE_LABEL}`,
    headers: {
      "X-Auth-Token": `${process.env.TOKEN}`,
      "x-ubidots-apikey": `${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
    maxRedirects: 20,
  };

  // const request: any = https.request(options, (response: any) => {
  //   const chunks: any[] = [];

  //   response.on("data", (chunk: any) => chunks.push(chunk));

  //   response.on("end", () => {
  //     const body = Buffer.concat(chunks);
  //     console.log(body.toString());
  //   });

	// 	response.on("error", (error: any) => console.error(error));
	// });
	
	const request: any = https.request(options);

  await request.write(postData);

  request.end();
}
