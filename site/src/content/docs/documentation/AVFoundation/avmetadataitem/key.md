---
source_path: "documentation/AVFoundation/avmetadataitem/key.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmetadataitem/key"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:key:0000:0001">key</span>

<span class="ko-segment" data-segment-id="seg:paragraph:key:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:key:0002:0001">메타데이터 항목의 키입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:key:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:key:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:key:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:key:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:key:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:key:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:key:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:key:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@NSCopying
var key: (any NSCopying & NSObjectProtocol)? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">key 속성에는 메타데이터 항목의 내용을 식별하는 데 사용되는 실제 키가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 값은 메타데이터 항목의 키 공간에 따라 특정됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmetadataitem/commonkey.md">var commonKey: AVMetadataKey?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">메타데이터 항목의 common key입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataitem/keyspace.md">var keySpace: AVMetadataKeySpace?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">메타데이터 항목 키의 키 공간입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmetadataitem/key">View on Apple Developer</a>*</span>
