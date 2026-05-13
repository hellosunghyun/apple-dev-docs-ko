---
source_path: "documentation/AVFoundation/avsamplebufferrendersynchronizer/intendedspatialaudioexperience-3z7d3.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/intendedspatialaudioexperience-3z7d3"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:intendedspatialaudioexperience:0000:0001">intendedSpatialAudioExperience</span>

<span class="ko-segment" data-segment-id="seg:paragraph:intendedspatialaudioexperience:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:intendedspatialaudioexperience:0002:0001">The synchronizer’s intended Spatial Audio experience.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:intendedspatialaudioexperience:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:intendedspatialaudioexperience:0004:0001">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var intendedSpatialAudioExperience: any SpatialAudioExperience { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this I/O type if your app doesn’t use <a href="https://developer.apple.com/documentation/AVFoundation/AVCaptureSession">@@TOKEN_0@@</a>, or doesn’t have any specific requirements for aggregating input and output audio in the same realtime I/O callback.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">앱이 캡처 세션을 사용하는 경우, 이 값을 지정하면 이미 실행 중인 출력 오디오에 글리치 없이 세션이 녹화를 시작할 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplebufferrendersynchronizer/intendedspatialaudioexperience-3z7d3">View on Apple Developer</a>*</span>
