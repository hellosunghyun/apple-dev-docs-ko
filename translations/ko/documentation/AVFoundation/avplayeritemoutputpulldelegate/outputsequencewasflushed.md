---
source_path: "documentation/AVFoundation/avplayeritemoutputpulldelegate/outputsequencewasflushed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate/outputsequencewasflushed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputsequencewasflushed:0000:0001">outputSequenceWasFlushed(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputsequencewasflushed:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputsequencewasflushed:0002:0001">새 샘플 시퀀스가 시작됨을 델리게이트에 알립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputsequencewasflushed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputsequencewasflushed:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputsequencewasflushed:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputsequencewasflushed:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputsequencewasflushed:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputsequencewasflushed:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputsequencewasflushed:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputsequencewasflushed:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func outputSequenceWasFlushed(_ output: AVPlayerItemOutput)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When your app enters a state where using a video decoder resources is not permissible, the value of this property changes to <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> along with the video renderer’s status changing to <a href="avqueuedsamplebufferrenderingstatus/failed.md">@@TOKEN_1@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">To resume rendering sample buffers, you must first reset the video renderer by calling <a href="avqueuedsamplebufferrendering/flush(">@@TOKEN_0@@</a>.md) or <a href="avsamplebuffervideorenderer/flush(removingdisplayedimage:completionhandler:">@@TOKEN_1@@</a>.md).</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>output</code>: 메시지를 보낸 출력 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritemoutputpulldelegate/outputmediadatawillchange(_:">func outputMediaDataWillChange(AVPlayerItemOutput)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">새 샘플이 곧 도착함을 델리게이트에 알립니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemoutputpulldelegate/outputsequencewasflushed(_:">View on Apple Developer</a>)*</span>
