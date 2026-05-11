---
source_path: "documentation/sensorkit/srsensorreader.md"
upstream_sha: "sample-local"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/sensorkit/srsensorreader"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:srsensorreader:0000:0001">SRSensorReader</span>

<span class="ko-segment" data-segment-id="seg:paragraph:srsensorreader:0001:0001">Use a sensor reader to request access to SensorKit data.</span> <span class="ko-segment" data-segment-id="seg:paragraph:srsensorreader:0001:0002">Your app needs approval before it can collect sensor information.</span>

## <span class="ko-segment" data-segment-id="seg:heading:request-authorization:0002:0001">Request authorization</span>

<span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0003:0001">Call <code>requestAuthorization(sensors:completion:)</code> before reading data.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:request-authorization:0004:0001">SensorKit requires explicit user permission and Apple approval.</span>
