# SRSensorReader

Use a sensor reader to request access to SensorKit data. Your app needs approval before it can collect sensor information.

## Request authorization

Call `requestAuthorization(sensors:completion:)` before reading data.

> SensorKit requires explicit user permission and Apple approval.

