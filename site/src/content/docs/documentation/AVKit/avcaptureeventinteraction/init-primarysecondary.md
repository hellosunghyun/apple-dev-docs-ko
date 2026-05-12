---
source_path: "documentation/AVKit/avcaptureeventinteraction/init-primarysecondary.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avcaptureeventinteraction/init-primarysecondary"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initprimarysecondary:0000:0001">init(primary:secondary:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initprimarysecondary:0001:0001">**Framework**: AVKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initprimarysecondary:0002:0001">Creates a capture event interaction with handlers that respond independently to presses of hardware buttons.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initprimarysecondary:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initprimarysecondary:0004:0001">iOS 17.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initprimarysecondary:0004:0002">iPadOS 17.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initprimarysecondary:0004:0003">Mac Catalyst 17.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(primary primaryHandler: @escaping (AVCaptureEvent) -> Void, secondary secondaryHandler: @escaping (AVCaptureEvent) -> Void)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>primaryHandler</code>: An event handler the system calls when a person performs a primary capture event.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>secondaryHandler</code>: An event handler the system calls when a person performs a secondary capture event.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcaptureeventinteraction/init(handler:">init(handler: (AVCaptureEvent) -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Creates a capture event interaction with a handler that responds to presses of hardware buttons.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avkit/avcaptureeventinteraction/init(primary:secondary:">View on Apple Developer</a>)*</span>
