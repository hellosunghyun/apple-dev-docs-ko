---
source_path: "documentation/AddressBook/kabwithinintervalfromtoday.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/addressbook/kabwithinintervalfromtoday"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:kabwithinintervalfromtoday:0000:0001">kABWithinIntervalFromToday</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kabwithinintervalfromtoday:0001:0001">**Framework**: Address Book **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kabwithinintervalfromtoday:0002:0001">오늘부터의 시간 간격(초 단위) 안에 있는 요소를 검색합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kabwithinintervalfromtoday:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:kabwithinintervalfromtoday:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var kABWithinIntervalFromToday: _ABSearchComparison { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="abmultiplevalueselection.md">var ABMultipleValueSelection: ABPeoplePickerSelectionBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">사용자는 여러 값을 선택할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="abnovalueselection.md">var ABNoValueSelection: ABPeoplePickerSelectionBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">사용자는 개별 값을 선택할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="absinglevalueselection.md">var ABSingleValueSelection: ABPeoplePickerSelectionBehavior</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">사용자는 단일 값을 선택할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="kabalternatebirthdaycomponentsproperty.md">let kABAlternateBirthdayComponentsProperty: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">그레고리력이 아닌 달력에서 생일을 나타내는 구성 요소입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="kabbitsinbitfieldmatch.md">var kABBitsInBitFieldMatch: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">ABPersonFlags의 비트와 일치하는 요소를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="kabcontainssubstring.md">var kABContainsSubString: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">값을 포함하는 요소를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="kabcontainssubstringcaseinsensitive.md">var kABContainsSubStringCaseInsensitive: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">값을 대소문자 구분 없이 포함하는 요소를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="kabdefaultnameordering.md">var kABDefaultNameOrdering: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Address Book 애플리케이션에서 기본 이름 정렬(개인이름을 먼저 표시할지 성을 먼저 표시할지 여부)을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="kabdeletedrecords.md">let kABDeletedRecords: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">삭제된 레코드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="kabdoesnotcontainsubstring.md">var kABDoesNotContainSubString: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">값을 포함하지 않는 요소를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="kabdoesnotcontainsubstringcaseinsensitive.md">var kABDoesNotContainSubStringCaseInsensitive: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">값을 대소문자 구분 없이 포함하지 않는 요소를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="kabequal.md">var kABEqual: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">값과 동일한 요소를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="kabequalcaseinsensitive.md">var kABEqualCaseInsensitive: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">값과 동일한 요소를 대소문자 구분 없이 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="kabfirstnamefirst.md">var kABFirstNameFirst: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Address Book에서 이름이 먼저 표시됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="kabgreaterthan.md">var kABGreaterThan: _ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">값보다 큰 요소를 검색합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/addressbook/kabwithinintervalfromtoday">View on Apple Developer</a>*</span>
