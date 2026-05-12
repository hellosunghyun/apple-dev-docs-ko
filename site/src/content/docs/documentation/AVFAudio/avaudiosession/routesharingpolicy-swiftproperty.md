---
source_path: "documentation/AVFAudio/avaudiosession/routesharingpolicy-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:routesharingpolicy:0000:0001">routeSharingPolicy</span>

<span class="ko-segment" data-segment-id="seg:paragraph:routesharingpolicy:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:routesharingpolicy:0002:0001">활성 route-sharing 정책입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:routesharingpolicy:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:routesharingpolicy:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:routesharingpolicy:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:routesharingpolicy:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:routesharingpolicy:0004:0004">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:routesharingpolicy:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:routesharingpolicy:0004:0006">watchOS 5.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var routeSharingPolicy: AVAudioSession.RouteSharingPolicy { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">기타 적절한 대체 경로가 존재할 때, 시스템이 이 앱의 오디오를 기본 시스템 출력 외의 위치로 라우팅하도록 이 값을 사용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudiosession/routesharingpolicy-swift.enum.md">AVAudioSession.RouteSharingPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오디오 세션에서 가능한 route-sharing policy를 나타내는 case입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.property">View on Apple Developer</a>*</span>
