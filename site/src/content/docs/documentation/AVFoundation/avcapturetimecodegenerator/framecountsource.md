---
source_path: "documentation/AVFoundation/avcapturetimecodegenerator/framecountsource.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/framecountsource"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:framecountsource:0000:0001">frameCountSource</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framecountsource:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framecountsource:0002:0001">A frame counter timecode source that operates independently of any internal or external synchronization.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:framecountsource:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:framecountsource:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framecountsource:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framecountsource:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framecountsource:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:framecountsource:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class var frameCountSource: AVCaptureTimecode.Source { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This class property represents a standalone timecode source that advances based purely on frame count, independent of any real-time or external synchronization.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">It is ideal for scenarios where a simple, self-contained timing reference is sufficient, without requiring alignment to system clocks or external devices.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturetimecodegenerator/currentsource.md">var currentSource: AVCaptureTimecode.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">The active timecode source used by <a href="avcapturetimecodegenerator.md">@@TOKEN_0@@</a> to maintain clock synchronization for accurate timecode generation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var availableSources: [AVCaptureTimecode.Source]](avcapturetimecodegenerator/availablesources.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">An array of available timecode synchronization sources that can be used by the timecode generator.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturetimecodegenerator/realtimeclocksource.md">class var realTimeClockSource: AVCaptureTimecode.Source</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A predefined timecode source synchronized to the real-time system clock.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturetimecodegenerator/startsynchronization(source:">func startSynchronization(source: AVCaptureTimecode.Source)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Synchronizes the generator with the specified timecode source.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturetimecodegenerator/framecountsource">View on Apple Developer</a>*</span>
