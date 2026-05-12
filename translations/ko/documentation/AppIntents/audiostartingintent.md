---
source_path: "documentation/AppIntents/audiostartingintent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appintents/audiostartingintent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:audiostartingintent:0000:0001">AudioStartingIntent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiostartingintent:0001:0001">**Framework**: App Intents **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiostartingintent:0002:0001">실행될 때 오디오 재생 상태를 재생, 일시 중지 또는 기타 방식으로 수정하는 App Intent입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:audiostartingintent:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:audiostartingintent:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiostartingintent:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiostartingintent:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiostartingintent:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiostartingintent:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiostartingintent:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:audiostartingintent:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AudioStartingIntent : SystemIntent
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 프로토콜을 채택하면 시스템이 App Intent가 오디오를 재생함을 인식합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">시스템은 그 오디오를 방해할 수 있는 대화나 다른 경험을 피할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0009:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0010:0001">상속 대상</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0001"><a href="appintent.md">AppIntent</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0002"><a href="persistentlyidentifiable.md">PersistentlyIdentifiable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0003"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0004"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0011:0005"><a href="systemintent.md">SystemIntent</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="audioplaybackintent.md">protocol AudioPlaybackIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">실행 시 오디오 재생 상태를 재생, 일시 중지하거나 다른 방식으로 수정하는 App Intent입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="audiorecordingintent.md">protocol AudioRecordingIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">오디오 녹음 상태를 시작, 중지하거나 다른 방식으로 수정하는 앱 인텐트입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="cameracaptureintent.md">protocol CameraCaptureIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">기기의 카메라를 사용해 사진 또는 동영상을 촬영하는 활동을 시작하는 인텐트를 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0002">이 protocol로 인텐트를 표시하면 Camera quick action에서 사용할 수 있는 동작으로 노출됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="playvideointent.md">protocol PlayVideoIntent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">검색어를 기준으로 동영상을 검색한 뒤 콘텐츠를 재생하는 인텐트입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/appintents/audiostartingintent">View on Apple Developer</a>*</span>
