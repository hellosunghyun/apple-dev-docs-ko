---
source_path: "documentation/sensorkit/srsensorreader.md"
upstream_sha: "sample-local"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/sensorkit/srsensorreader"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:srsensorreader:0000:0001">SRSensorReader</span>

<span class="ko-segment" data-segment-id="seg:paragraph:srsensorreader:0001:0001">센서 리더를 사용하여 SensorKit 데이터 접근을 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:srsensorreader:0001:0002">앱이 센서 정보를 수집하려면 먼저 승인이 필요합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:request-authorization:0002:0001">권한 요청</span>

<span class="ko-segment" data-segment-id="seg:paragraph:request-authorization:0003:0001">데이터를 읽기 전에 <code>requestAuthorization(sensors:completion:)</code>을 호출합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:request-authorization:0004:0001">SensorKit에는 명시적인 사용자 권한과 Apple 승인이 필요합니다.</span>
