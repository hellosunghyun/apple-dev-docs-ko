---
source_path: "documentation/AVFoundation/avmutableassetdownloadstoragemanagementpolicy.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avmutableassetdownloadstoragemanagementpolicy:0000:0001">AVMutableAssetDownloadStorageManagementPolicy</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutableassetdownloadstoragemanagementpolicy:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutableassetdownloadstoragemanagementpolicy:0002:0001">새 저장소 관리 정책을 생성할 때 사용하는 가변 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avmutableassetdownloadstoragemanagementpolicy:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avmutableassetdownloadstoragemanagementpolicy:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutableassetdownloadstoragemanagementpolicy:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutableassetdownloadstoragemanagementpolicy:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutableassetdownloadstoragemanagementpolicy:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avmutableassetdownloadstoragemanagementpolicy:0004:0005">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class AVMutableAssetDownloadStorageManagementPolicy
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:managing-storage:0008:0001">저장소 관리</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-storage:0009:0001"><a href="avmutableassetdownloadstoragemanagementpolicy/expirationdate.md">var expirationDate: Date</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-storage:0010:0001">에셋의 만료일입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-storage:0011:0001"><a href="avmutableassetdownloadstoragemanagementpolicy/priority.md">var priority: AVAssetDownloadedAssetEvictionPriority</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-storage:0012:0001">다운로드된 에셋의 제거 우선순위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:managing-storage:0013:0001"><a href="avassetdownloadedassetevictionpriority.md">struct AVAssetDownloadedAssetEvictionPriority</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:managing-storage:0014:0001">스토리지 관리 정책의 제거 우선순위를 정의하는 상수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0015:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:inherits-from:0016:0001">상속</span>

- <span class="ko-segment" data-segment-id="seg:list:inherits-from:0017:0001"><a href="avassetdownloadstoragemanagementpolicy.md">AVAssetDownloadStorageManagementPolicy</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/CVarArg.md">CVarArg</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/CustomDebugStringConvertible.md">CustomDebugStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/CustomStringConvertible.md">CustomStringConvertible</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Foundation/NSCopying.md">NSCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0007"><a href="../Foundation/NSMutableCopying.md">NSMutableCopying</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0008"><a href="../ObjectiveC/NSObjectProtocol.md">NSObjectProtocol</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avassetdownloadstoragemanager.md">class AVAssetDownloadStorageManager</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">다운로드된 에셋을 자동으로 삭제하도록 정책을 관리하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avassetdownloadstoragemanagementpolicy.md">class AVAssetDownloadStorageManagementPolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">다운로드된 에셋의 저장소를 자동으로 관리하도록 정책을 정의하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutableassetdownloadstoragemanagementpolicy">View on Apple Developer</a>*</span>
