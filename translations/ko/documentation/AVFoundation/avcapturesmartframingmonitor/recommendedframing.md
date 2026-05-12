---
source_path: "documentation/AVFoundation/avcapturesmartframingmonitor/recommendedframing.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/recommendedframing"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:recommendedframing:0000:0001">recommendedFraming</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedframing:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedframing:0002:0001">모니터에서 권장하는 최신 프레이밍입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recommendedframing:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:recommendedframing:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedframing:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recommendedframing:0004:0003">Mac Catalyst 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var recommendedFraming: AVCaptureFraming? { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="adopting-smart-framing-in-your-camera-app.md">Adopting smart framing in your camera app</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="avcapturesession.md">@@TOKEN_0@@</a>가 실행 중일 때 모니터는 해당 기기의 장면을 계속 관찰하여 가장 적절한 프레이밍을 추천합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 권장 프레이밍은 항상 <a href="avcapturesmartframingmonitor/enabledframings.md">@@TOKEN_0@@</a>의 값 중 하나입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">이 속성은 현재 구성에서 기기가 스마트 프레이밍을 지원하지 않으면 <code>nil</code>을 반환할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0004">기본값은 <code>nil</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0005">이 속성은 key-value 관찰이 가능하며, 변경을 관찰한 뒤 <a href="avcapturedevice/setdynamicaspectratio(_:completionhandler:">@@TOKEN_0@@</a>.md)를 호출하고 관련 기기에서 <a href="avcapturedevice/videozoomfactor.md">@@TOKEN_1@@</a>를 설정하여 기존 프레이밍과 새 프레이밍 전환 애니메이션에 가장 적합한 순서로 새 권장사항에 대응할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var supportedFramings: [AVCaptureFraming]](avmetadataidentifier/itunesmetadataalbum.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 구성에서 모니터가 지원하는 프레이밍 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var enabledFramings: [AVCaptureFraming]](avmetadataidentifier/itunesmetadataalbumartist.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">모니터가 제안할 수 있는 프레이밍 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturesmartframingmonitor/recommendedframing">View on Apple Developer</a>*</span>
