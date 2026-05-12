---
source_path: "documentation/AVFoundation/avcapturereactioneffectstate/endtime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturereactioneffectstate/endtime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:endtime:0000:0001">endTime</span>

<span class="ko-segment" data-segment-id="seg:paragraph:endtime:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:endtime:0002:0001">반응 효과가 끝난 직후 이어지는 첫 프레임의 표시 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:endtime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:endtime:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endtime:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endtime:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endtime:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:endtime:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var endTime: CMTime { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">효과 진행 중에는 값이 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a>이지만, 반응 효과가 완료되어 시스템이 이를 <a href="avcapturedevice/reactioneffectsinprogress.md">@@TOKEN_1@@</a> 목록에서 제거하면 유효한 시간으로 변경됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturereactioneffectstate/reactiontype.md">var reactionType: AVCaptureReactionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">반응 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturereactiontype.md">struct AVCaptureReactionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">효과가 수행할 수 있는 반응의 유형을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturereactioneffectstate/starttime.md">var startTime: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">시스템이 효과를 렌더링하는 첫 프레임의 표시 시간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturereactioneffectstate/endtime">View on Apple Developer</a>*</span>
