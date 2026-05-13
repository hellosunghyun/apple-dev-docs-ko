---
source_path: "documentation/AddressBook/kabpersonaddressproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/addressbook/kabpersonaddressproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:kabpersonaddressproperty:0000:0001">kABPersonAddressProperty</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kabpersonaddressproperty:0001:0001">**Framework**: Address Book **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kabpersonaddressproperty:0002:0001">Identifier for the address multivalue property.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kabpersonaddressproperty:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:kabpersonaddressproperty:0004:0001">iOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kabpersonaddressproperty:0004:0002">iPadOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kabpersonaddressproperty:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
let kABPersonAddressProperty: ABPropertyID
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="kabpersonaddresscitykey.md">let kABPersonAddressCityKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">City.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="kabpersonaddresscountrycodekey.md">let kABPersonAddressCountryCodeKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">입력 예측값과 레이블 간의 코사인 거리 손실을 계산합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0002">The value is an ISO country code.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="kabpersonaddresscountrykey.md">let kABPersonAddressCountryKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Country or region.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="kabpersonaddressstatekey.md">let kABPersonAddressStateKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">State.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="kabpersonaddressstreetkey.md">let kABPersonAddressStreetKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Street.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="kabpersonaddresszipkey.md">let kABPersonAddressZIPKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Zip code.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="kabpersonalternatebirthdaycalendaridentifierkey.md">let kABPersonAlternateBirthdayCalendarIdentifierKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The associated value is a string representing the calendar identifier for a <a href="https://developer.apple.com/documentation/CoreFoundation/CFCalendar">@@TOKEN_0@@</a>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="kabpersonalternatebirthdaydaykey.md">let kABPersonAlternateBirthdayDayKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The associated value is a <a href="https://developer.apple.com/documentation/CoreFoundation/CFNumber">@@TOKEN_0@@</a> of type <a href="https://developer.apple.com/documentation/CoreFoundation/CFNumberType/nsIntegerType">@@TOKEN_1@@</a> whose value is the day for the birthday.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="kabpersonalternatebirthdayerakey.md">let kABPersonAlternateBirthdayEraKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The associated value is a <a href="https://developer.apple.com/documentation/CoreFoundation/CFNumber">@@TOKEN_0@@</a> of type <a href="https://developer.apple.com/documentation/CoreFoundation/CFNumberType/nsIntegerType">@@TOKEN_1@@</a> whose value is the era for the birthday.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="kabpersonalternatebirthdayisleapmonthkey.md">let kABPersonAlternateBirthdayIsLeapMonthKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">The associated value is a <a href="https://developer.apple.com/documentation/CoreFoundation/CFNumber">@@TOKEN_0@@</a> of type <a href="https://developer.apple.com/documentation/CoreFoundation/CFNumberType/charType">@@TOKEN_1@@</a>.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="kabpersonalternatebirthdaymonthkey.md">let kABPersonAlternateBirthdayMonthKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/lossfunction/softmaxcrossentropy(labelsmoothing:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="kabpersonalternatebirthdayproperty.md">let kABPersonAlternateBirthdayProperty: ABPropertyID</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">예측값과 정답 레이블의 Intersection Over Union(IOU)을 기준으로 신뢰도를 재점수화할지 여부를 결정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="kabpersonalternatebirthdayyearkey.md">let kABPersonAlternateBirthdayYearKey: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">x, y 손실 스케일링 계수를 지정하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="kabpersonanniversarylabel.md">let kABPersonAnniversaryLabel: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Birthdate.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="kabpersonassistantlabel.md">let kABPersonAssistantLabel: CFString!</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Assistant.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/addressbook/kabpersonaddressproperty">View on Apple Developer</a>*</span>
