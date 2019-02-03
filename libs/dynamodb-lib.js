import AWS from "aws-sdk";

// DynamoDB region configured for AWS
AWS.config.update({ region: "us-east-1" });

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    return dynamoDb[action](params).promise();
}