---
source_path: "documentation/ARKit/arsessionobserver/sessionwasinterrupted.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsessionobserver/sessionwasinterrupted"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessionwasinterrupted:0000:0001">sessionWasInterrupted(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwasinterrupted:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwasinterrupted:0002:0001">delegate에 세션이 임시로 프레임 처리를 중지하고 장치 위치 추적을 멈췄음을 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessionwasinterrupted:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessionwasinterrupted:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func sessionWasInterrupted(_ session: ARSession)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">세션은 카메라 또는 모션 센싱 데이터 수신에 실패하면 중단됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">세션 중단은 카메라 캡처를 사용할 수 없을 때마다 발생합니다. 예를 들어 앱이 백그라운드에 있거나 여러 개의 포그라운드 앱이 있는 경우, 또는 기기가 모션 센서 데이터 처리를 수행하기에 너무 바쁠 때입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">❗ **중요**: 중단은 세션을 수동으로 일시 중지한 것과 동일합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">이 콜백에 대해 <a href="arsession/pause(">@@TOKEN_0@@</a>.md)를 호출하면 중단 종료 시 앱이 알림을 받지 못할 수 있으므로 호출하면 안 됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>session</code>: 정보를 제공하는 세션입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arsessionobserver/sessioninterruptionended(_:">func sessionInterruptionEnded(ARSession)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">delegate에 세션이 프레임 처리를 다시 시작하고 장치 위치 추적을 재개했음을 알립니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arsessionobserver/sessionshouldattemptrelocalization(_:">func sessionShouldAttemptRelocalization(ARSession) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">delegate에 중단 후 world-tracking 상태 복구를 시도할지 여부를 묻습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/arkit/arsessionobserver/sessionwasinterrupted(_:">Apple Developer에서 보기</a>)*</span>
