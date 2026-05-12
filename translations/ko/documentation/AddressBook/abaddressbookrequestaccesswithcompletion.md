---
source_path: "documentation/AddressBook/abaddressbookrequestaccesswithcompletion.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/addressbook/abaddressbookrequestaccesswithcompletion"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:abaddressbookrequestaccesswithcompletion:0000:0001">ABAddressBookRequestAccessWithCompletion(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abaddressbookrequestaccesswithcompletion:0001:0001">**Framework**: Address Book **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abaddressbookrequestaccesswithcompletion:0002:0001">사용자로부터 주소록 데이터에 대한 접근 권한을 요청합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abaddressbookrequestaccesswithcompletion:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:abaddressbookrequestaccesswithcompletion:0004:0001">iOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:abaddressbookrequestaccesswithcompletion:0004:0002">iPadOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:abaddressbookrequestaccesswithcompletion:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func ABAddressBookRequestAccessWithCompletion(_ addressBook: ABAddressBook!, _ completion: ABAddressBookRequestAccessCompletionHandler!)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 함수를 사용하여 주소록 데이터에 대한 접근 권한을 요청합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">사용자에게 접근 권한을 요청하는 동안에도 이 호출은 블록되지 않으므로 앱이 계속 실행됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">접근 권한이 부여될 때까지 앱이 보유한 주소록 참조에는 데이터가 포함되지 않으며, 데이터 수정 시도는 <a href="kaboperationnotpermittedbyusererror.md">@@TOKEN_0@@</a> 유형의 오류로 실패합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">사용자에게 권한을 요청하는 것은 처음 요청할 때만 수행됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005">이후 호출은 사용자가 부여한 권한을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">완료 핸들러는 임의 큐에서 호출됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">앱 전체에서 주소록을 사용하는 경우, 해당 주소록의 모든 사용이 단일 큐로 디스패치되어 thread-safe 동작이 보장되도록 앱에서 책임집니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>addressBook</code>: 해당 주소록입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>completion</code>: 사용자가 접근을 허용하거나 거부한 뒤 한 번 호출되는 완료 핸들러입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="abaddressbookaddrecord(_:_:_:">func ABAddressBookAddRecord(ABAddressBook!, ABRecord!, UnsafeMutablePointer&lt;Unmanaged&lt;CFError&gt;?&gt;!) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">주소록에 레코드를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="abaddressbookcopyarrayofallgroups(_:">func ABAddressBookCopyArrayOfAllGroups(ABAddressBook!) -&gt; Unmanaged&lt;CFArray&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">주소록의 모든 그룹을 포함한 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="abaddressbookcopyarrayofallgroupsinsource(_:_:">func ABAddressBookCopyArrayOfAllGroupsInSource(ABAddressBook!, ABRecord!) -&gt; Unmanaged&lt;CFArray&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">특정 소스의 모든 그룹을 포함하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="abaddressbookcopyarrayofallpeople(_:">func ABAddressBookCopyArrayOfAllPeople(ABAddressBook!) -&gt; Unmanaged&lt;CFArray&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">주소록의 모든 사람 레코드를 반환하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="abaddressbookcopyarrayofallpeopleinsource(_:_:">func ABAddressBookCopyArrayOfAllPeopleInSource(ABAddressBook!, ABRecord!) -&gt; Unmanaged&lt;CFArray&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">특정 소스의 모든 사람 레코드를 반환하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="abaddressbookcopyarrayofallpeopleinsourcewithsortordering(_:_:_:">func ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering(ABAddressBook!, ABRecord!, ABPersonSortOrdering) -&gt; Unmanaged&lt;CFArray&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">주소록의 모든 사람 레코드를 지정된 정렬 순서로 정렬한 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="abaddressbookcopyarrayofallsources(_:">func ABAddressBookCopyArrayOfAllSources(ABAddressBook!) -&gt; Unmanaged&lt;CFArray&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">주소록의 모든 소스를 반환하는 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="abaddressbookcopydefaultsource(_:">func ABAddressBookCopyDefaultSource(ABAddressBook!) -&gt; Unmanaged&lt;ABRecord&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">기본 소스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="abaddressbookcopylocalizedlabel(_:">func ABAddressBookCopyLocalizedLabel(CFString!) -&gt; Unmanaged&lt;CFString&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">레코드 속성 라벨의 로컬라이즈된 버전을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="abaddressbookcopypeoplewithname(_:_:">func ABAddressBookCopyPeopleWithName(ABAddressBook!, CFString!) -&gt; Unmanaged&lt;CFArray&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">주소록의 사람 복합 이름에 대해 접두어 검색을 수행하고 검색 조건과 일치하는 사람 배열을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="abaddressbookcreate(">func ABAddressBookCreate() -&gt; Unmanaged&lt;ABAddressBook&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Address Book 데이터베이스의 데이터로 새 주소록 객체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="abaddressbookcreatewithoptions(_:_:">func ABAddressBookCreateWithOptions(CFDictionary!, UnsafeMutablePointer&lt;Unmanaged&lt;CFError&gt;?&gt;!) -&gt; Unmanaged&lt;ABAddressBook&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">Address Book 데이터베이스의 데이터로 새 주소록 객체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0037:0001"><a href="abaddressbookgetauthorizationstatus(">func ABAddressBookGetAuthorizationStatus() -&gt; ABAuthorizationStatus</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">주소록 데이터에 접근하기 위한 앱의 권한 부여 상태를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0039:0001"><a href="abaddressbookgetgroupcount(_:">func ABAddressBookGetGroupCount(ABAddressBook!) -&gt; CFIndex</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0040:0001">주소록의 그룹 수를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0041:0001"><a href="abaddressbookgetgroupwithrecordid(_:_:">func ABAddressBookGetGroupWithRecordID(ABAddressBook!, ABRecordID) -&gt; Unmanaged&lt;ABRecord&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0042:0001">주어진 레코드 ID에 해당하는 그룹을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0044:0001">*<a href="https://developer.apple.com/documentation/addressbook/abaddressbookrequestaccesswithcompletion(_:_:">Apple Developer에서 보기</a>)*</span>
