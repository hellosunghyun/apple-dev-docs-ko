---
source_path: "documentation/AVFoundation/avasset/chaptermetadatagroups-bestmatchingpreferredlanguages.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avasset/chaptermetadatagroups-bestmatchingpreferredlanguages"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:chaptermetadatagroupsbestmatchingpreferredlanguages:0000:0001">chapterMetadataGroups(bestMatchingPreferredLanguages:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:chaptermetadatagroupsbestmatchingpreferredlanguages:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:chaptermetadatagroupsbestmatchingpreferredlanguages:0002:0001">선호 언어 목록과 가장 잘 일치하는 locale을 가진 챕터 배열을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:chaptermetadatagroupsbestmatchingpreferredlanguages:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:chaptermetadatagroupsbestmatchingpreferredlanguages:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:chaptermetadatagroupsbestmatchingpreferredlanguages:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:chaptermetadatagroupsbestmatchingpreferredlanguages:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:chaptermetadatagroupsbestmatchingpreferredlanguages:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:chaptermetadatagroupsbestmatchingpreferredlanguages:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:chaptermetadatagroupsbestmatchingpreferredlanguages:0004:0006">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func chapterMetadataGroups(bestMatchingPreferredLanguages preferredLanguages: [String]) -> [AVTimedMetadataGroup]
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="presenting-chapter-markers.md">Presenting chapter markers</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0009:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001"><a href="avtimedmetadatagroup.md">@@TOKEN_0@@</a> 객체 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0011:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">반환된 배열의 각 객체에는 챕터 제목을 나타내는 <a href="avmetadataitem.md">@@TOKEN_0@@</a> 객체가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002"><a href="avtimedmetadatagroup.md">@@TOKEN_0@@</a> 객체의 time range 속성은 챕터 제목 항목의 time range와 동일합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">메타데이터 그룹에는 공통 키 <a href="avmetadatakey/commonkeyartwork.md">@@TOKEN_0@@</a> 항목이 있는 경우 해당 항목을 포함해 모든 챕터 메타데이터가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0002">시스템은 메타데이터 항목과 메타데이터 그룹의 시간 범위(타임스탬프와 기간)가 겹치는 경우 지정된 공통 키를 가진 <a href="avmetadataitem.md">@@TOKEN_0@@</a>를 기존 <a href="avtimedmetadatagroup.md">@@TOKEN_1@@</a> 객체에 추가합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0003">이러한 항목의 locale은 챕터 제목의 locale과 일치할 필요가 없습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001"><a href="avmetadataitem/metadataitems(from:filteredandsortedaccordingtopreferredlanguages:">@@TOKEN_0@@</a>.md) 메서드를 사용해 각 그룹의 메타데이터 항목을 추가로 필터링할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0002">반환된 항목은 <a href="avmetadataitem/metadataitems(from:with:">@@TOKEN_0@@</a>.md) 메서드를 사용해 locale 기준으로 추가로 필터링할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">이 메서드는 <a href="avasset/availablechapterlocales.md">@@TOKEN_0@@</a> 속성을 비동기 방식으로 로드한 후 현재 스레드를 차단하지 않고 호출할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0016:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0017:0001"><code>preferredLanguages</code>: BCP 47 언어 식별자 문자열의 배열입니다. 배열 내 식별자의 순서는 선호 언어 순서를 반영하며, 가장 선호하는 언어가 배열의 맨 앞에 옵니다. 일반적으로 <a href="https://developer.apple.com/documentation/Foundation/NSLocale">@@TOKEN_1@@</a>의 <a href="https://developer.apple.com/documentation/Foundation/NSLocale/preferredLanguages">@@TOKEN_2@@</a> 클래스 메서드에서 이 배열을 가져와 사용자의 선호 언어를 전달합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avasset/chaptermetadatagroups(bestmatchingpreferredlanguages:">Apple Developer에서 보기</a>)*</span>
