---
source_path: "documentation/ARKit/arsessionobserver/session-didoutputaudiosamplebuffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arsessionobserver/session-didoutputaudiosamplebuffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sessiondidoutputaudiosamplebuffer:0000:0001">session(_:didOutputAudioSampleBuffer:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessiondidoutputaudiosamplebuffer:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessiondidoutputaudiosamplebuffer:0002:0001">새로운 녹음 오디오 샘플 버퍼를 델리게이트에서 사용할 수 있음을 알려줍니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sessiondidoutputaudiosamplebuffer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sessiondidoutputaudiosamplebuffer:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessiondidoutputaudiosamplebuffer:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sessiondidoutputaudiosamplebuffer:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func session(_ session: ARSession, didOutputAudioSampleBuffer audioSampleBuffer: CMSampleBuffer)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this property is <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a> if switching between multiple output sources isn’t currently possible.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>session</code>: 정보를 제공하는 session입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>audioSampleBuffer</code>: 출력된 sample buffer입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/arkit/arsessionobserver/session(_:didoutputaudiosamplebuffer:">View on Apple Developer</a>)*</span>
