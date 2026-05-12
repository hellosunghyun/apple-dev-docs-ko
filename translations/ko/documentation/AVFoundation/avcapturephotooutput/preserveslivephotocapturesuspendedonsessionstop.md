---
source_path: "documentation/AVFoundation/avcapturephotooutput/preserveslivephotocapturesuspendedonsessionstop.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/preserveslivephotocapturesuspendedonsessionstop"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preserveslivephotocapturesuspendedonsessionstop:0000:0001">preservesLivePhotoCaptureSuspendedOnSessionStop</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preserveslivephotocapturesuspendedonsessionstop:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preserveslivephotocapturesuspendedonsessionstop:0002:0001">세션이 중지될 때 Live Photo 캡처의 일시 중지 상태를 유지할지 지정하는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preserveslivephotocapturesuspendedonsessionstop:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preserveslivephotocapturesuspendedonsessionstop:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preserveslivephotocapturesuspendedonsessionstop:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preserveslivephotocapturesuspendedonsessionstop:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preserveslivephotocapturesuspendedonsessionstop:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preserveslivephotocapturesuspendedonsessionstop:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preservesLivePhotoCaptureSuspendedOnSessionStop: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 값의 기본값은 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>입니다. 이는 세션이 중지될 때 Live Photo 캡처가 다시 시작됨을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">세션이 재시작될 때 <a href="avcapturephotooutput/islivephotocapturesuspended.md">@@TOKEN_0@@</a> 속성의 상태를 저장하려면 이 값을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>로 설정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturephotooutput/islivephotocapturesupported.md">var isLivePhotoCaptureSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 캡처 출력이 Live Photo 캡처를 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcapturephotooutput/islivephotocaptureenabled.md">var isLivePhotoCaptureEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Live Photo 캡처에 대해 캡처 파이프라인을 구성할지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturephotooutput/islivephotocapturesuspended.md">var isLivePhotoCaptureSuspended: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">현재 Live Photo 캡처가 일시 중지 상태인지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturephotooutput/islivephotoautotrimmingenabled.md">var isLivePhotoAutoTrimmingEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">과도한 움직임을 방지하기 위해 Live Photo 동영상 캡처를 자동으로 자를지 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var availableLivePhotoVideoCodecTypes: [AVVideoCodecType]](avcapturephotooutput/availablelivephotovideocodectypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 Live Photo 동영상 캡처에 사용할 수 있는 비디오 코덱 배열입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/preserveslivephotocapturesuspendedonsessionstop">View on Apple Developer</a>*</span>
