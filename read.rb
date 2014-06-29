def uppercase_name(filename) 
	names =  File.read(filename).split.map {|name| name.upcase}
end

puts uppercase_name('names.txt')