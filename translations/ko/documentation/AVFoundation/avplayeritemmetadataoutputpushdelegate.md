---
source_path: "documentation/AVFoundation/avplayeritemmetadataoutputpushdelegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avplayeritemmetadataoutputpushdelegate:0000:0001">AVPlayerItemMetadataOutputPushDelegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayeritemmetadataoutputpushdelegate:0001:0001">**Framework**: AVFoundation **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayeritemmetadataoutputpushdelegate:0002:0001">추가 메타데이터를 제공하기 위해 구현할 수 있는 메서드입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avplayeritemmetadataoutputpushdelegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmetadataoutputpushdelegate:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmetadataoutputpushdelegate:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmetadataoutputpushdelegate:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmetadataoutputpushdelegate:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmetadataoutputpushdelegate:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmetadataoutputpushdelegate:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avplayeritemmetadataoutputpushdelegate:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol AVPlayerItemMetadataOutputPushDelegate : AVPlayerItemOutputPushDelegate
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 프로토콜은 <a href="avplayeritemoutputpushdelegate.md">@@TOKEN_0@@</a> 프로토콜을 확장합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:combining-timed-metadata-groups:0010:0001">타이밍 메타데이터 그룹 결합</span>

- <span class="ko-segment" data-segment-id="seg:list:combining-timed-metadata-groups:0011:0001">[func metadataOutput(AVPlayerItemMetadataOutput, didOutputTimedMetadataGroups: sending [AVTimedMetadataGroup], from: AVPlayerItemTrack?)](avplayeritemmetadataoutputpushdelegate/metadataoutput(_:didoutputtimedmetadatagroups:from:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:combining-timed-metadata-groups:0012:0001">새로운 메타데이터 항목 모음이 사용 가능함을 델리게이트에 알립니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0013:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0014:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0015:0001"><a href="avplayeritemoutputpushdelegate.md">AVPlayerItemOutputPushDelegate</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0015:0002"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0015:0003"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0015:0004"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0016:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avplayeritemmetadataoutput/advanceintervalfordelegateinvocation.md">var advanceIntervalForDelegateInvocation: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">플레이어 항목 메타데이터 출력 객체가 일반적으로 알리는 시점보다 더 이르게 델리게이트에 메시지를 전달하는 시간 간격(초)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avplayeritemmetadataoutput/delegate.md">var delegate: (any AVPlayerItemMetadataOutputPushDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">델리게이트 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avplayeritemmetadataoutput/delegatequeue.md">var delegateQueue: dispatch_queue_t?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">메시지가 델리게이트로 전송되는 디스패치 큐입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avplayeritemmetadataoutput/setdelegate(_:queue:">func setDelegate((any AVPlayerItemMetadataOutputPushDelegate)?, queue: dispatch_queue_t?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">델리게이트와 델리게이트가 호출되는 디스패치 큐를 설정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate">View on Apple Developer</a>*</span>
