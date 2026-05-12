---
source_path: "documentation/AppKit/nsdocument/updatechangecount.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsdocument/updatechangecount"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:updatechangecount:0000:0001">updateChangeCount(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:updatechangecount:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:updatechangecount:0002:0001">수신자의 변경 횟수를 지정된 변경 유형에 따라 업데이트합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:updatechangecount:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:updatechangecount:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func updateChangeCount(_ change: NSDocument.ChangeType)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value of this key is an <a href="https://developer.apple.com/documentation/Foundation/NSNumber">@@TOKEN_0@@</a> object.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">앱에서 실행 취소 및 다시 실행을 구현하는 경우, 실행 취소 그룹을 생성할 때마다 변경 횟수를 증가시키고 실행 취소 또는 다시 실행 작업이 수행될 때 변경 횟수를 감소시켜야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>NSDocument</code>의 기본 실행 취소/다시 실행 기능을 사용하는 경우, 변경 횟수를 업데이트하여 문서의 편집 상태를 설정하는 작업은 자동으로 수행됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 기능을 사용하지 않는 경우에만 이 메서드를 호출하면 됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>change</code>: 문서에 수행된 변경 유형입니다. 값 목록은 <a href="nsdocument/changetype.md">@@TOKEN_1@@</a>를 참조합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="nsdocument/updatechangecount(withtoken:for:">func updateChangeCount(withToken: Any, for: NSDocument.SaveOperationType)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">저장 작업이 성공적으로 완료된 뒤 문서의 변경 횟수 설정을 업데이트합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="nsdocument/changetype.md">NSDocument.ChangeType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">문서의 편집 상태를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="nsdocument/changecounttoken(for:">func changeCountToken(for: NSDocument.SaveOperationType) -&gt; Any</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">저장 작업 시작 시점의 문서 변경 기록을 캡슐화한 개체를 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/appkit/nsdocument/updatechangecount(_:">View on Apple Developer</a>)*</span>
