---
source_path: "documentation/AVFoundation/avassetwriterinput/captionreceiver/finish.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/captionreceiver/finish"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:finish:0000:0001">finish()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finish:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finish:0002:0001">Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:finish:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:finish:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:finish:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:finish:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:finish:0004:0004">macOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func finish()
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avassetwriterinput/captionreceiver/append(_:">func append(AVCaptionGroup) async throws</a>-4opbd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">포트의 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avassetwriterinput/captionreceiver/append(_:">func append(AVCaption) async throws</a>-4wpi2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Suspends until the input is ready for more media data, then appends the caption.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetwriterinput/captionreceiver/appendimmediately(_:">func appendImmediately(AVCaptionGroup) throws -&gt; Bool</a>-7q21r.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Appends the caption group synchronously if the input is ready for more media data.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetwriterinput/captionreceiver/appendimmediately(_:">func appendImmediately(AVCaption) throws -&gt; Bool</a>-9uy14.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Appends the caption synchronously if the input is ready for more media data.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/captionreceiver/finish(">View on Apple Developer</a>)*</span>
