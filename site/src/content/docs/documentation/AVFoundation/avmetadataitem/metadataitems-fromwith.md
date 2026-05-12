---
source_path: "documentation/AVFoundation/avmetadataitem/metadataitems-fromwith.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadataitem/metadataitems-fromwith"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:metadataitemsfromwith:0000:0001">metadataItems(from:with:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataitemsfromwith:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataitemsfromwith:0002:0001">지정된 로케일과 일치하는 메타데이터 항목을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:metadataitemsfromwith:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:metadataitemsfromwith:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataitemsfromwith:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataitemsfromwith:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataitemsfromwith:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataitemsfromwith:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataitemsfromwith:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:metadataitemsfromwith:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class func metadataItems(from metadataItems: [AVMetadataItem], with locale: Locale) -> [AVMetadataItem]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정된 키와 키 공간이 일치하는 메타데이터 항목의 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>volume</code>: The volume. The value must be between <code>0.0</code> and <code>1.0</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>time</code>: The start time at which to set the volume.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[class func metadataItems(from: [AVMetadataItem], filteredByIdentifier: AVMetadataIdentifier) -&gt; [AVMetadataItem]](avmutableaudiomixinputparameters/setvolumeramp(fromstartvolume:toendvolume:timerange:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 식별자에 대한 메타데이터 항목을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[class func metadataItems(from: [AVMetadataItem], withKey: Any?, keySpace: AVMetadataKeySpace?) -&gt; [AVMetadataItem]](avmetadatakey/id3metadatakeyaudioencryption.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutableaudiomixinputparameters/setvolume(_:at:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[class func metadataItems(from: [AVMetadataItem], filteredAndSortedAccordingToPreferredLanguages: [String]) -&gt; [AVMetadataItem]](avmetadatakey/id3metadatakeyaudioseekpointindex.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">지정된 언어 식별자 중 하나와 일치하는 로케일의 메타데이터 항목을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[class func metadataItems(from: [AVMetadataItem], filteredBy: AVMetadataItemFilter) -&gt; [AVMetadataItem]](avmetadatakey/id3metadatakeyband.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">필터링된 메타데이터 항목을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadataitem/metadataitems(from:with:">View on Apple Developer</a>)*</span>
