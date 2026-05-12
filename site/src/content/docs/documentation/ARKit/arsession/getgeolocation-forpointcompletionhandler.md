---
source_path: "documentation/ARKit/arsession/getgeolocation-forpointcompletionhandler.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsession/getgeolocation-forpointcompletionhandler"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:getgeolocationforpointcompletionhandler:0000:0001">getGeoLocation(forPoint:completionHandler:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getgeolocationforpointcompletionhandler:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getgeolocationforpointcompletionhandler:0002:0001">프레임워크의 로컬 좌표계를 위도, 경도 및 고도로 변환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:getgeolocationforpointcompletionhandler:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:getgeolocationforpointcompletionhandler:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getgeolocationforpointcompletionhandler:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:getgeolocationforpointcompletionhandler:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func geoLocation(forPoint position: simd_float3) async throws -> (CLLocationCoordinate2D, CLLocationDistance)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ARKit은 로컬 좌표 공간을 “world” 좌표 공간이라고 부르지만, 이는 지리 좌표와 다릅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">ARKit의 좌표 공간에 대한 자세한 내용은 <a href="arsession/setworldorigin(relativetransform:">@@TOKEN_0@@</a>.md)에서 확인합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 함수를 성공적으로 실행하려면 상태가 <a href="argeotrackingstatus/state-swift.enum/localized.md">@@TOKEN_0@@</a>인 <a href="argeotrackingconfiguration.md">@@TOKEN_1@@</a> 세션이 필요합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>position</code>: 변환할 로컬 좌표의 위치입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>completionHandler</code>: 이 함수가 반환되면 컨트롤이 실행할 코드입니다. 세션은 이 코드를 delegate 큐에서 실행하며 매개변수는 다음과 같습니다: - **coordinate**: 위치 좌표(위도, 경도).</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0003">**altitude**: 고도입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0004">**error**: 변환이 실패할 경우 이유입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0013:0001">*<a href="https://developer.apple.com/documentation/arkit/arsession/getgeolocation(forpoint:completionhandler:">Apple Developer에서 보기</a>)*</span>
