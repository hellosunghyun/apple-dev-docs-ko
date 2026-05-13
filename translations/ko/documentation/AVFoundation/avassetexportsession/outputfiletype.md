---
source_path: "documentation/AVFoundation/avassetexportsession/outputfiletype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetexportsession/outputfiletype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputfiletype:0000:0001">outputFileType</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputfiletype:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputfiletype:0002:0001">자산 export session이 쓰는 출력 파일 형식입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputfiletype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputfiletype:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputfiletype:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputfiletype:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputfiletype:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputfiletype:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputfiletype:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var outputFileType: AVFileType? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="avassetexportsession/outputurl.md">var outputURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">자산 export session이 출력을 쓰는 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var supportedFileTypes: [AVFileType]](avassetexportsession/supportedfiletypes.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">세션이 쓸 수 있는 파일 형식의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avassetexportsession/allowsparallelizedexport.md">var allowsParallelizedExport: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">세션이 export 작업을 병렬로 수행할 수 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetexportsession/shouldoptimizefornetworkuse.md">var shouldOptimizeForNetworkUse: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">동영상을 네트워크 사용에 맞춰 최적화할지 여부를 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetexportsession/canperformmultiplepassesoversourcemediadata.md">var canPerformMultiplePassesOverSourceMediaData: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">더 나은 결과를 위해 소스 미디어를 여러 번 패스하면서 처리할 수 있는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetexportsession/timerange.md">var timeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">내보낼 소스 자산의 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avassetexportsession/filelengthlimit.md">var fileLengthLimit: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">세션 출력이 초과하면 안 되는 파일 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetexportsession/directoryfortemporaryfiles.md">var directoryForTemporaryFiles: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">export 과정이 생성하는 임시 파일을 저장할 수 있는 디렉터리입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetexportsession/outputfiletype">View on Apple Developer</a>*</span>
