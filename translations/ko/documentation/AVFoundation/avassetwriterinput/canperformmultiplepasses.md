---
source_path: "documentation/AVFoundation/avassetwriterinput/canperformmultiplepasses.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/canperformmultiplepasses"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:canperformmultiplepasses:0000:0001">canPerformMultiplePasses</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canperformmultiplepasses:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canperformmultiplepasses:0002:0001">A Boolean value that indicates whether the input may perform multiple passes over appended media data.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canperformmultiplepasses:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:canperformmultiplepasses:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformmultiplepasses:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformmultiplepasses:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformmultiplepasses:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformmultiplepasses:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canperformmultiplepasses:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var canPerformMultiplePasses: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">When the value for this property is <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, configure your source media data for random access.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">After appending the media data for the current pass, as specified by the <a href="avassetwriterinput/currentpassdescription.md">@@TOKEN_0@@</a> property, call <a href="avassetwriterinput/markcurrentpassasfinished(">@@TOKEN_1@@</a>.md) so the system can determine whether it needs to perform additional passes.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">The system may perform only the initial pass if it determines there’s no benefit to performing multiple passes.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">When the value for this property is <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>, your source for media data only needs to support sequential access.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">In this case, append all of the source media one time and call <a href="avassetwriterinput/markasfinished(">@@TOKEN_0@@</a>.md).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">오디오 데이터는 Core Audio가 지원하는 형식이어야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Currently the only way for this property to become <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a> is when the value of <a href="avassetwriterinput/performsmultipassencodingifsupported.md">@@TOKEN_1@@</a> is <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_2@@</a>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">The final value is available after you call <a href="avassetwriter/startwriting(">@@TOKEN_0@@</a>.md).</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">This property is key-value observable.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetwriterinput/currentpassdescription.md">var currentPassDescription: AVAssetWriterInputPassDescription?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">An object that describes the requirements for the current pass.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetwriterinputpassdescription.md">class AVAssetWriterInputPassDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">An object that defines the interface to query for the requirements of the current pass.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetwriterinput/markcurrentpassasfinished.md">func markCurrentPassAsFinished()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Tells the input to analyze the appended media to determine whether it can improve the results by reencoding certain segments.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avassetwriterinput/performsmultipassencodingifsupported.md">var performsMultiPassEncodingIfSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">A Boolean value that indicates whether the input attempts to encode the source media data using multiple passes.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avassetwriterinput/respondtoeachpassdescription(on:using:">func respondToEachPassDescription(on: dispatch_queue_t, using: () -&gt; Void)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Tells the input to invoke a callback whenever it begins a new pass.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avassetwriterinput/multipasscontroller.md">AVAssetWriterInput.MultiPassController</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Provides an interface to receive an async sequence of pass descriptions for the writer input receiver, if multi-pass is supported.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/canperformmultiplepasses">View on Apple Developer</a>*</span>
