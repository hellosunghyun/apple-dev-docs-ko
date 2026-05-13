---
source_path: "documentation/AddressBook/abpropertytype.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/addressbook/abpropertytype"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:abpropertytype:0000:0001">ABPropertyType</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abpropertytype:0001:0001">**Framework**: Address Book **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abpropertytype:0002:0001">ABRecord 속성의 가능한 유형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:abpropertytype:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:abpropertytype:0004:0001">iOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:abpropertytype:0004:0002">iPadOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:abpropertytype:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:abpropertytype:0004:0004">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias ABPropertyType = CFIndex
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:constants:0008:0001">Constants</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0009:0001"><a href="kaberrorinproperty.md">var kABErrorInProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0010:0001">유효하지 않은 속성이 사용되었습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0011:0001"><a href="kabstringproperty.md">var kABStringProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0012:0001">이 속성은 <code>NSString</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0013:0001"><a href="kabintegerproperty.md">var kABIntegerProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0014:0001">이 속성은 정수를 나타내는 <code>NSNumber</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0015:0001"><a href="kabrealproperty.md">var kABRealProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0016:0001">이 속성은 실수를 나타내는 <code>NSNumber</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0017:0001"><a href="kabdateproperty.md">var kABDateProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0018:0001">이 속성은 <code>NSDate</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0019:0001"><a href="kabarrayproperty.md">var kABArrayProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0020:0001">이 속성은 <code>NSArray</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0021:0001"><a href="kabdictionaryproperty.md">var kABDictionaryProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0022:0001">이 속성은 <code>NSDictionary</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0023:0001"><a href="kabdataproperty.md">var kABDataProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0024:0001">이 속성은 <code>NSData</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0025:0001"><a href="kabmultistringproperty.md">var kABMultiStringProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0026:0001">이 속성은 <code>NSString</code> 객체를 포함하는 <code>ABMultiValue</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0027:0001"><a href="kabmultiintegerproperty.md">var kABMultiIntegerProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0028:0001">이 속성은 정수를 나타내는 <code>NSNumber</code> 객체를 포함하는 <code>ABMultiValue</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0029:0001"><a href="kabmultirealproperty.md">var kABMultiRealProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0030:0001">이 속성은 실수를 나타내는 <code>NSNumber</code> 객체를 포함하는 <code>ABMultiValue</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0031:0001"><a href="kabmultidateproperty.md">var kABMultiDateProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0032:0001">이 속성은 <code>NSDate</code> 객체를 포함하는 <code>ABMultiValue</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0033:0001"><a href="kabmultiarrayproperty.md">var kABMultiArrayProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0034:0001">이 속성은 <code>NSArray</code> 객체를 포함하는 <code>ABMultiValue</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0035:0001"><a href="kabmultidictionaryproperty.md">var kABMultiDictionaryProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0036:0001">이 속성은 <code>NSDictionary</code> 객체를 포함하는 <code>ABMultiValue</code> 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:constants:0037:0001"><a href="kabmultidataproperty.md">var kABMultiDataProperty: _ABPropertyType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:constants:0038:0001">이 속성은 <code>NSData</code> 객체를 포함하는 <code>ABMultiValue</code> 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0039:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="absearchcomparison.md">typealias ABSearchComparison</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">비교 유형을 지정하는 데 사용되는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="absearchconjunction.md">typealias ABSearchConjunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">복합 검색 요소를 생성하는 데 사용되는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">*<a href="https://developer.apple.com/documentation/addressbook/abpropertytype">View on Apple Developer</a>*</span>
