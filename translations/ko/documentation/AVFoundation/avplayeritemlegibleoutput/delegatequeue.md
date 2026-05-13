---
source_path: "documentation/AVFoundation/avplayeritemlegibleoutput/delegatequeue.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/delegatequeue"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:delegatequeue:0000:0001">delegateQueue</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegatequeue:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegatequeue:0002:0001">The dispatch queue on which the delegate is called.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegatequeue:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:delegatequeue:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegatequeue:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegatequeue:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegatequeue:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegatequeue:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:delegatequeue:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var delegateQueue: dispatch_queue_t? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This property does not support key-value observing.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayeritemlegibleoutput/delegate.md">var delegate: (any AVPlayerItemLegibleOutputPushDelegate)?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">QuickTime의 앨범 또는 컬렉션 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/quicktimeuserdataarranger.md">static var airPlayReceiverRequiresInternet: AVError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">영화 파일 콘텐츠의 편곡자 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avplayeritemlegibleoutputpushdelegate.md">protocol AVPlayerItemLegibleOutputPushDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Methods you can implement to provide alternative attributed-string output.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avplayeritemlegibleoutput/advanceintervalfordelegateinvocation.md">var advanceIntervalForDelegateInvocation: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The time interval, in seconds, that a player item legible output object messages its delegate earlier than normal.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/delegatequeue">View on Apple Developer</a>*</span>
