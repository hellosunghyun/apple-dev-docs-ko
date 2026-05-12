---
source_path: "documentation/AVFoundation/avassetreferencerestrictions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetreferencerestrictions:0000:0001">AVAssetReferenceRestrictions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreferencerestrictions:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreferencerestrictions:0002:0001">외부 미디어 데이터에 대한 참조를 해결할 때 사용할 제약 조건입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreferencerestrictions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetreferencerestrictions:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreferencerestrictions:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreferencerestrictions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreferencerestrictions:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreferencerestrictions:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreferencerestrictions:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreferencerestrictions:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct AVAssetReferenceRestrictions
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:reference-restrictions:0008:0001">참조 제한</span>

- <span class="ko-segment" data-segment-id="seg:list:reference-restrictions:0009:0001"><a href="avassetreferencerestrictions/forbidall.md">static var forbidAll: AVAssetReferenceRestrictions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reference-restrictions:0010:0001">에셋은 컨테이너 파일에 저장된 미디어만 참조할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reference-restrictions:0011:0001"><a href="avassetreferencerestrictions/forbidremotereferencetolocal.md">static var forbidRemoteReferenceToLocal: AVAssetReferenceRestrictions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reference-restrictions:0012:0001">원격 에셋은 로컬 미디어를 참조해서는 안 됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reference-restrictions:0013:0001"><a href="avassetreferencerestrictions/forbidlocalreferencetoremote.md">static var forbidLocalReferenceToRemote: AVAssetReferenceRestrictions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reference-restrictions:0014:0001">로컬 에셋은 원격 미디어를 참조해서는 안 됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reference-restrictions:0015:0001"><a href="avassetreferencerestrictions/forbidcrosssitereference.md">static var forbidCrossSiteReference: AVAssetReferenceRestrictions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reference-restrictions:0016:0001">원격 에셋은 다른 호스트에 저장된 원격 미디어 데이터를 참조해서는 안 됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reference-restrictions:0017:0001"><a href="avassetreferencerestrictions/forbidlocalreferencetolocal.md">static var forbidLocalReferenceToLocal: AVAssetReferenceRestrictions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reference-restrictions:0018:0001">로컬 에셋은 컨테이너 파일 외부에 저장된 로컬 미디어 데이터를 참조해서는 안 됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:reference-restrictions:0019:0001"><a href="avassetreferencerestrictions/defaultpolicy.md">static var defaultPolicy: AVAssetReferenceRestrictions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:reference-restrictions:0020:0001">The asset should use the default reference restrictions policy.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0021:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0022:0001"><a href="avassetreferencerestrictions/init(rawvalue:">init(rawValue: UInt)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0023:0001">Creates reference restrictions with an integer value.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0024:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0025:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0003"><a href="../Swift/ExpressibleByArrayLiteral.md">ExpressibleByArrayLiteral</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0004"><a href="../Swift/OptionSet.md">OptionSet</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0005"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0006"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0007"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0026:0008"><a href="../Swift/SetAlgebra.md">SetAlgebra</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0027:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avasset/referencerestrictions.md">var referenceRestrictions: AVAssetReferenceRestrictions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The restrictions that an asset places on how it resolves references to external media.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreferencerestrictions">View on Apple Developer</a>*</span>
